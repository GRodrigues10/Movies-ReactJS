import styled from "styled-components";

export const StylesSection14 = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  .content-section p {
    font-size: 1.1rem;
    padding-left: 20px;
    margin-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #ccc;
  }

  .carousel-container {
    position: relative; /* Essencial para posicionar setas */
    display: flex;
    align-items: center;
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
    padding-bottom: 20px;
  }

  /* Esconde barra de rolagem */
  .content-section .cards::-webkit-scrollbar {
    display: none;
  }
  .content-section .cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Cards */
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

    .carousel-container {
  position: relative; /* Essencial para as setas ficarem dentro da div */
  display: flex;
  align-items: center;
}

/* setas */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 12px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza o ícone dentro do botão */
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}

.arrow.left {
  left: 5px;
}

.arrow.right {
  right: 5px;
}

  /* ================= MEDIA QUERIES ================= */
  @media screen and (min-width: 530px) {
    .content-section p {
      font-size: 1.2rem;
    }
    .content-section .cards .card img {
      max-height: 230px;
    }
  }

  @media screen and (min-width: 768px) {
    /* setas */
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%); /* centraliza vertical */
      background: rgba(0, 0, 0, 0.4);
      border: none;
      color: white;
      font-size: 2.5rem;
      cursor: pointer;
      padding: 12px;
      z-index: 10;
      border-radius: 50%;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center; /* centraliza o ícone dentro do círculo */
      transition: opacity 0.3s ease, background 0.3s ease;
    }

    .arrow:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    .arrow.left {
      left: 5px;
    }

    .arrow.right {
      right: 5px;
    }

    /* só mostra as setas quando o mouse passa por cima */
    .carousel-container:hover .arrow {
      opacity: 1;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section p {
      font-size: 1.3rem;
    }
    .content-section .cards .card img {
      max-height: 240px;
    }
  }
`;
