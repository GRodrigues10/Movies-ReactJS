import styled from "styled-components";

export const StylesSection6 = styled.div`
  width: 100%;
  height: 80vh;
  background-color: black;
  color: white;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
    width: 90%;
    gap: 50px;
  }
  .content-section img {
    width: 250px;
    position: relative;
   
  }

  .content-section h2 {
    font-size: 1.8rem;
    position: relative;
    margin-bottom: 50px;
   
  }

  .content-section p {
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 530px) {
    .content-section h2 {
      font-size: 2rem;
    }

    .content-section p {
      font-size: 1rem;
    }

    .content-section img {
      width: 270px;
    }
  }

  @media screen and (min-width: 800px) {
    .content-section {
      flex-direction: row;
      text-align: start;
      justify-content: space-between;
      padding: 20px;
    }
    .content-section h2 {
      font-size: 2.2rem;
      bottom: 0;
      margin-bottom: 10px;
    }

    .content-section p {
      font-size: 1.1rem;
      text-align: start;
      width: 500px;
    }

    .content-section img {
      width: 220px;
      left: 0px;
      margin-bottom: 100px;
    }
  }
  @media screen and (min-width: 992px) {
    .content-section {
      justify-content: space-between;
      width: 100%;
    }
    .content-section h2 {
      font-size: 3rem;
    }
    .content-section p {
      font-size: 1.3rem;
      width: 100%;
    }

    .content-section img {
      width: 400px;
      position: relative;
      margin-bottom: 70px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section {
      width: 95%;
    }
    .content-section h2 {
      font-size: 4rem;
    }
    .content-section p {
      font-size: 1.5rem;
      width: 620px;
    }

    .content-section img {
      width: 450px;
    }
  }
`;
