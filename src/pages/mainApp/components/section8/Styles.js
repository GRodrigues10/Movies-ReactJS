// StylesSection8.js
import styled from "styled-components";

export const StylesSection8 = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding-bottom: 0px;

  .content-section h2 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 20px;
    margin-bottom: 15px;
    margin-top: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    position: relative;
    padding-top: 20px;
  }

  /* Barra gradiente estilo Netflix */
  .content-section h2::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ff0000, #ff6600);
    border-radius: 2px;
  }

  /* .saga-block {
    margin-bottom: 35px;
  } */

  .saga-title {
    font-size: 1.1rem;
    padding-left: 30px;

    color: #ccc;
  }

  .content-section .cards {
    display: flex;
    gap: 15px;
    margin-left: 18px;
    align-items: center;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px;
    /* padding-bottom: 20px;  */
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards iguais */
  .content-section .cards .card {
    flex: 0 0 auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: visible; 
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px; 
    padding: 2px; 
    background-color: rgba(0, 0, 0, 0.3); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    will-change: transform, box-shadow;
  }

  .content-section .cards .card img {
    width: auto;
    max-height: 220px;
    border-radius: 10px;
    object-fit: contain;
    background-color: black;
    transition: transform 0.4s ease-in-out, filter 0.3s ease;
  }

  .content-section .cards .card:hover {
    transform: scale(1.01);
    z-index: 2; 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  .content-section .cards .card:hover img {
    filter: brightness(1.2) contrast(1.1);
  }

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width:530px) {
    .content-section h2 {
      font-size: 1.6rem;
    }
    .saga-title {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width:768px) {
    .content-section h2 {
      font-size: 1.8rem;
    }
    .saga-title {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }

  @media screen and (min-width:992px) {
    .content-section h2 {
      font-size: 2rem;
    }
    .saga-title {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;
