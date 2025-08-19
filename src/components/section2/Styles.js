import styled from "styled-components";

export const StylesSection2 = styled.div`
  width: 100%;
  height: 200px;

  /* gradiente vertical suave no topo + gradiente horizontal de cores */
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 60%
    ),
    linear-gradient(90deg, #17002e, #6a0268, #8b0000);

  /* sombra suave (opcional) para reforçar a transição */
  box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.4);

  .content-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 20px;
    width: 100%;
    padding: 10px;
  }
  .content-section img {
    width: 70px;
  }
  .content-section .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }

  .content-section .content h2 {
    font-size: 1rem;
    color: white;
  }

  .content-section .content p {
    font-size: 0.9rem;
    color: white;
  }

  .content-section .content a {
    background-color: #000000b6;
    border-radius: 5px;
    padding: 5px;
    text-decoration: none;
    color: white;
    transition: .4s ease;
    &:hover{
     background-color: white;
    color:black;
    }
  }

  @media screen and (min-width: 530px) {
    .content-section img{
        width: 80px;
        margin-left: 20px;
    }

    .content-section .content h2 {
        font-size: 1.2rem;
    }

     .content-section .content p {
        font-size: 1.1rem;
    }
    .content-section .content a {
        font-size: 1.1rem;
    }
  }

   @media screen and (min-width: 768px) {
    .content-section{
        justify-content: center;
    }
    .content-section img{
        width: 90px;
        
    }

    .content-section .content h2 {
        font-size: 1.3rem;
    }

     .content-section .content p {
        font-size: 1.1rem;
    }
    .content-section .content a {
        font-size: 1.1rem;
        padding: 8px;
    }
  }

     @media screen and (min-width: 992px) {
    .content-section{
        justify-content: center;
    }
    .content-section img{
        width: 100px;
        
    }

    .content-section .content h2 {
        font-size: 1.4rem;
    }

    
   
  }
`;
