import styled from "styled-components";

export const StylesHeader = styled.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.9) 0%,
  rgba(0, 0, 0, 0.6) 40%,
  rgba(0, 0, 0, 0.3) 70%,
  rgba(0, 0, 0, 0) 100%
);

  img {
    width: 100px;
  }

  .user-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-controls select {
    padding: 5px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 0.75rem;
    text-align: center;
    background-color: #0000008c;
    color: white;
  }

  .user-controls option{
    background-color: white;
    color:black;
  }

  .user-controls button {
    padding: 5px;
    font-weight: 550;
    border-radius: 5px;
    border: none;
    font-size: 0.75rem;
    background-color: #e50914;
    color: white;
    width: 65px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #be0811ff;
    }
  }

  @media screen and (min-width: 530px) {
    img {
      width: 130px;
    }

    .user-controls {
      gap: 20px;
    }

    .user-controls select {
      font-size: 0.85rem;
    }
    .user-controls button {
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 768px) {
    padding-inline: 30px;

    img {
      width: 150px;
    }

    .user-controls select {
      font-size: 1rem;
    }
    .user-controls button {
      font-size: 1rem;
      width: 80px;
    }
  }

  @media screen and (min-width: 992px) {
    img {
      width: 170px;
    }
    .user-controls {
    }
    .user-controls select {
      font-size: 1.1rem;
      height: 38px;

      width: 160px;
    }
    .user-controls button {
      font-size: 1.1rem;
      width: 90px;
      padding: 8px;
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 180px;
    }
    .user-controls {
    }
    .user-controls select {
      font-size: 1.2rem;
      height: 40px;
      width: 170px;
    }
    .user-controls button {
      font-size: 1.2rem;
      width: 100px;
      padding: 8px;
    }
  }
`;
