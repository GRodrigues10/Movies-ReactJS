import styled from "styled-components";
import background from "../../../../assets/back01.jpg";

export const StylesLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  /* background-image: url(${background}); */
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;

  .content-section {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    background-color: #0000009d;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    min-height: 560px;
  
  }

  .content-section h2 {
    font-size: 2.1rem;
    margin-bottom: 20px;
    margin-top: 40px;
    width: 90%;
    font-weight: 650;
  }

  .content-section input {
    padding: 15px;
    font-size: 0.9rem;
    width: 90%;
    background-color: #181717ff;
    border: 1px solid grey;
    border-radius: 5px;
    margin-bottom: 15px;
    color:white;
  }

  ::placeholder {
    color: #b3a4a4ff;
  }

  .content-section button {
    padding: 10px;
    font-weight: 550;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    background-color: #e50914;
    color: white;
    width: 90%;
    cursor: pointer;
    transition: 0.4s ease;
    margin-bottom: 20px;

    &:hover {
      background-color: #be0811ff;
    }
  }

  .separate {
    color: #b3a4a4ff;
    margin-bottom: 10px;
  }

  .forgot-password {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .forgot-password p {
    padding: 8px;
    width: 90%;
    background-color: #333333;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .forgot-password a {
    color: white;
    margin-bottom: 20px;
     transition: .4s ease;
    &:hover{
        color: #ccbbbbff;
    }
  }

  .remember {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    padding: 10px 0;
    justify-content: flex-start;
    width: 90%;
  }

  .remember label {
    margin: 0;
    width: auto;
    line-height: 1;
  }

  .remember input {
    margin: 0;
    height: 18px;
    width: 18px;
    background-color: black !important;
    color: black !important;
  }

  .sign-up-now {
    margin-top: 20px;
    width: 90%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    color: #bbafafff;
  }

  p > strong {
    color: white;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
        color: #ccbbbbff;
    }
  }

  @media screen and (min-width: 600px) {
    background-image: url(${background});
    height: 100%;
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section {
      width: 80%;
      max-width: 500px;
      max-height: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

   

  }

  @media screen and (min-width: 768px) {
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section {
      width: 80%;
    }
  }

  @media screen and (min-width: 992px) {
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section {
      width: 80%;
    }
  }

  @media screen and (min-width: 1200px) {
    .container {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    .container .content-section h2{
      font-size:2.4rem;
    }
    .container .content-section input{
        font-size: 1.1rem;
    }
    .container .content-section button{
        font-size: 1.1rem;
    }
     .separate {
    font-size: 1.1rem;
  }



  .forgot-password p {
   font-size: 1.1rem;
  }

  .forgot-password a {
    font-size: 1.1rem;
  }



  .remember label {
    margin: 0;
    width: auto;
    line-height: 1;
    font-size: 1.1rem;
  }

 

  .sign-up-now {
    font-size: 1.1rem;
  }

  }
`;
