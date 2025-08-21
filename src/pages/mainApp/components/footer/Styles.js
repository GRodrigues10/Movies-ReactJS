import styled from "styled-components";

export const StylesFooter = styled.div`
  max-height: 700px;
  width: 100%;
  background-color: black;
  color: white;

  .content-section {
    padding: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* wrapper para centralizar social + informations */
  .content-main {
    flex: 1; /* ocupa todo espaço */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* centraliza no meio */
  }

  .content-section .social-media {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
   
  }

  img {
    width: 50px;
    margin-bottom: 20px;
     cursor: pointer;
    transition: .4s ease;

    &:hover{
        transform: scale(1.08);
    }
  }

  .content-section .informations {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  .content-section .social-media{
    align-items: center;
    justify-content: center;
}

  .content-section .informations p {
    font-size: 1.1rem;
    margin-bottom: 6px;
    text-align: center;
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .content-section p {
    color: #ccc;
  }

  /* parte de baixo sempre fixa */
  .content-section .foot-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content-section .foot {
    font-size: 1rem;
    color: #757575;
    text-align: center;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) {
    .content-main {
      align-items: center;
      justify-content: center; /* garante centralização vertical */
    }

  .content-section .social-media{
    align-items: center;
    justify-content: center;
}

    .content-section .informations {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      width: 100%;
    }

    .content-section .informations .p1,
    .content-section .informations .p2,
    .content-section .informations .p3 {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    img {
      width: 40px;
    }

    .content-section .informations p {
      text-align: start;
      font-size: 1.1rem;
    }

    .content-section .foot {
      font-size: 1rem;
      padding-top: 20px;
    }
  }

  @media screen and (min-width: 992px){
       .content-section .informations{
        display: flex;
        align-items: center;
        justify-content: space-around;
       
    }


  }

  @media screen and (min-width: 1200px) {
    .content-section .informations p {
      font-size: 1.2rem;
    }

 

    .content-section .foot {
      font-size: 1.1rem;
    }
    
  }
`;
