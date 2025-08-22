import styled from "styled-components";

export const StylesHeader = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px 20px;
  position: relative;

  .content-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .p1 {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .p1 img {
    width: 120px;
    cursor: pointer;
  }

  /* Menu desktop */
  .desktop-menu {
    display: none;
    gap: 20px;
  }

  .desktop-menu p {
    cursor: pointer;
    transition: 0.3s ease;
  }

  .desktop-menu p:hover {
    color: #c5babaff;
  }

  .p2 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .p2 button {
    display: none;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .p2 button:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }

  .btn-mobile {
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* Menu lateral direito mobile */
  .side-menu {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100vh;
    background-color: #141414;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 0.3s ease;
    z-index: 1000;
  }

  .side-menu.open {
    right: 0;
  }

  .side-menu p {
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.1rem;
  }

  .side-menu p:hover {
    color: #c5babaff;
  }

  .close-btn {
    align-self: flex-end;
    font-size: 2rem;
    cursor: pointer;
  }

  .exit {
  margin-top: auto; /* Adicione esta linha */
  padding: 10px;
  font-size: 1.1rem;
  color: white;
  background-color: #E50914;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-shadow: 1px 1px 2px #0000007a;
  cursor: pointer;
  transition: 0.4s ease;
  margin-bottom: 10px;
}

.exit:hover {
  background-color: #c9141dff;
}

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 500;
  }

  /* Desktop */
  @media screen and (min-width: 768px) {
    .desktop-menu {
      display: flex;
      margin-left: 25px;
    }

    .p2 button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      padding: 8px;
      text-align: center;
      font-weight: normal;
      background-color: #242323ff;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 1rem;
    }

    .btn-mobile, .side-menu, .overlay {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    .p1 img {
      width: 150px;
    }

    .desktop-menu p {
      font-size: 1.2rem;
    }

    .p2 button {
      width: 100px;
      font-size: 1.2rem;
    }
  }
`;
