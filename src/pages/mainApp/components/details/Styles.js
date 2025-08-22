import styled from "styled-components";

export const StylesDetails = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.24)
    ),
    url(${(props) => props.bg2});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  .img {
    width: 100%;
    height: 100%;
    position: relative;
    right: 20px;
    top: 10px;
  }
  .img img {
    width: 50px;
  }

  .info {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .info h1 {
    font-size: 2.5rem;
    width: 100%;
    text-shadow: 2px 4px 2px #00000085;
    margin-top: 40px;
  }

  .info-extras {
    display: flex;
    gap: 20px;
    color: #e4d8d8ff;
  }
  .description {
    height: 100%;
  }

  .btns {
    display: flex;
    gap: 10px;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  button {
    padding: 9px;
    font-size: 1rem;
    background-color: #151616;
    border: none;
    color: white;
    border-radius: 5px;
    width: 95px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  .play {
    background-color: white;
    color: black;
    transition: 0.4s ease;

    &:hover {
      background-color: red;
      color: white;
    }
  }

  .more-info {
    width: 180px;
  }

  .casting {
    margin-bottom: 10px;
  }

  h3 {
    font-weight: normal;
  }

  .genres {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 530px) {
    .img img {
      width: 70px;
    }

    .info h1 {
      font-size: 2.7rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 11px;
      height: auto;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.2rem;
      width: 112px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 220px;
      font-size: 1.2rem;
    }
    .description {
      font-size: 1.1rem;
      width: 75%;
    }

    .info-extras {
      font-size: 1.1rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.1rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.3rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0)
      ),
      url(${(props) => props.bg});

    .img img {
      width: 80px;
    }

    .info h1 {
      font-size: 3rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 11px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.3rem;
      width: 120px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 220px;
      font-size: 1.2rem;
    }
    .description {
      font-size: 1.2rem;
      width: 75%;
    }

    .info-extras {
      font-size: 1.2rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.2rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    padding: 30px;

    .img img {
      width: 80px;
    }

    .info h1 {
      font-size: 3rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 11px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.3rem;
      width: 140px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 245px;
      font-size: 1.2rem;
      height: auto;
    }
    .description {
      font-size: 1.2rem;
      width: 75%;
    }

    .info-extras {
      font-size: 1.2rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.3rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .img img {
      width: 100px;
    }

    .info h1 {
      font-size: 3.5rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 15px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.5rem;
      width: 170px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 275px;
      font-size: 1.5rem;
      height: auto;
    }
    .description {
      font-size: 1.4rem;
      width: 45%;
    }

    .info-extras {
      font-size: 1.4rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.4rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.6rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.4rem;
      }
    }
  }


  @media screen and (min-width: 1440px) {
    .img img {
      width: 100px;
    }

    .info h1 {
      font-size: 4rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 15px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.6rem;
      width: 170px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 275px;
      font-size: 1.6rem;
      height: auto;
    }
    .description {
      font-size: 1.5rem;
      width: 45%;
    }

    .info-extras {
      font-size: 1.5rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.5rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.7rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.5rem;
      }
    }
  }

   @media screen and (min-width: 1536px) {
    .img img {
      width: 100px;
    }

    .info h1 {
      font-size: 4.2rem;
    }

    .description {
      height: 100%;
    }

    button {
      padding: 15px;
      height: auto;
      text-align: center;
    }

    .play {
      background-color: white;
      color: black;
      transition: 0.4s ease;
      font-size: 1.7rem;
      width: 190px;

      &:hover {
        background-color: red;
        color: white;
      }
    }

    .more-info {
      width: 295px;
      font-size: 1.7rem;
      height: auto;
    }
    .description {
      font-size: 1.6rem;
      width: 45%;
    }

    .info-extras {
      font-size: 1.6rem;
    }

    .casting {
      margin-bottom: 10px;
      p {
        font-size: 1.6rem;
      }
    }

    h3 {
      font-weight: normal;
      font-size: 1.8rem;
    }

    .genres {
      margin-bottom: 20px;
      p {
        font-size: 1.6rem;
      }
    }
  }
`;
