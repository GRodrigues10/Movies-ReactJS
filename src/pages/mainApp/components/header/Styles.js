import styled from "styled-components";

export const StylesHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  color: white-space;
  padding: 10px;

  .content-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: white;
  }

  .content-section .p1 {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .content-section img {
    width: 110px;
    margin-left: 10px;
  }
  .content-section .p1 p {
    display: none;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: #c5babaff;
    }
  }

  .content-section .p2 button {
    display: none;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: white;
      color: black;
      transform: scale(1.025);
    }
  }

  .content-section .btn-mobile {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 10px;
  }

  @media screen and (min-width: 530px) {
    .content-section img {
      width: 120px;
    }

    .content-section .btn-mobile {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section img {
      margin-right: 20px;
    }
    .content-section .p1 {
      gap: 20px;
    }
    .content-section .p1 p {
      display: flex;
      font-size: 1rem;
    }

    .content-section .btn-mobile {
      display: none;
    }

    .content-section .p2 button {
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
      margin-right: 10px;
    }
  }

  @media screen and {
  }

  @media screen and (min-width: 1200px) {
    .content-section img {
      width: 150px;
    }

    .content-section .p1 p {
      font-size: 1.2rem;
    }

    .content-section .btn-mobile {
      display: none;
    }

    .content-section .p2 button {
      width: 100px;
      font-size: 1.2rem;
    }
  }
`;
