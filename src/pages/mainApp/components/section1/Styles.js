// Styles.js
import styled from "styled-components";
import "../../../../../src/index.css";
export const StylesSection1 = styled.div`
  position: relative;
  width: 100%;
  height: 48vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  color: white;
  padding: 20px;
  overflow: hidden;
  

  /* Gradiente por cima da imagem */
  &::before {
    content: "";
    position: absolute;
    inset: 0; /* cobre toda a área */
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.1) 20%,
      /* mais escuro embaixo */ rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 1) 100% /* transparente no topo */
    );
    z-index: 1;
  }

  .content-section {
    position: relative; /* faz o texto ficar acima do gradiente */
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .title h1 {
    font-family: "Benguiat";
    font-size: 2rem;
    color: white;
    text-align: center;
      text-shadow: 2px 4px 6px #0000009d;
   
  }

  .desc {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    
  }

  .desc .season{
    color: white;
    position: relative;
    top: 10px;
  }

  .content-section .title {
    width: 70%;
  }

  .desc p {
    font-size: 1rem;
    width: 100%;
    text-align: start;
    color: #cab7b7ff;
    text-shadow: 1px 1px 1px #00000079;
  }

  .desc .btn button {
    padding: 9px;
    font-size: 1rem;
    background-color: #151616;
    border: none;
    color: white;
    border-radius: 5px;
    width: 95px;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
      background-color: white;
      color: black;
    }
  }

  .desc .btn .play {
    background-color: white;
    color: black;
    transition: .4s ease;
    &:hover{
      background-color: red ;
      color: white;
    }
  }

  .desc .btn .more{
    width: 165px;
  }

  .btn {
    display: flex;
    gap: 5px;
  }

  @media screen and (min-width: 530px) {
    background-image: url(${(props) => props.bg3});
    background-position: center top;
    height: 60vh;

    .content-section .title {
      width: 50%;
    }
    .title h1 {
      font-size: 2.1rem;
      text-align: center;
    }

    .desc p {
      font-size: 1.1rem;
      width: 80%;
    }

    .desc .btn button {
      font-size: 1.1rem;
      width: 100px;
    }

    .desc .btn .play {
      background-color: white;
      color: black;
    }

    .desc .btn .play {
      width: 115px;
  }

  .desc .btn .more{
    width: 175px;
  }

    .btn {
      display: flex;
      gap: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
    background-image: url(${(props) => props.bg2});
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
  background-attachment: fixed;
    
    .content-section .title {
      margin-top: 50px;
      padding-right: 70px;
      align-items: flex-start;
      justify-content: flex-start;
      display: flex;
      text-align: center;
      margin-left: 0;
      /* background-color: red; */
    }

    .content-section .desc p {
      font-size: 1.2rem;
      width: 50%;
    }

    .content-section .desc {
      margin: 10px;
    }

    .desc .btn button {
      padding: 12px;
    }

        .desc .btn .play {
      width: 115px;
  }

  .desc .btn .more{
    width: 195px;
  }

    .content-section .title h1 {
      font-size: 3.2rem;
    }
    .content-section {
      width: 100%;
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 992px) {
    background-image: url(${(props) => props.bg2});
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center center;

     .content-section .title {
      /* padding-right: 100px; */
      margin-top: 70px;
      padding-left: 12px;
      width: 200px;
      
    }
    .content-section .title h1 {
      font-size: 3.5rem;
    }

  
  }

    @media screen and (min-width: 1200px) {
    background-image: url(${(props) => props.bg2});
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
     
    .content-section .title {
      /* padding-right: 100px; */
      margin-top: 90px;
      padding-left: 15px;
      width: 200px;
    }

    .content-section .title h1 {
      font-size: 4.5rem;
    }

    .content-section .desc{
      margin-left: 15px;
    }

    .content-section .desc p {
      font-size: 1.4rem;
      width: 45%;
    }

    .content-section .desc button{
      font-size: 1.3rem;
      width: 115px;
    }

         .desc .btn .play {
      width: 125px;
  }

  .desc .btn .more{
    width: 222px;
  }
  }
`;
