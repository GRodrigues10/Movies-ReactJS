import styled from "styled-components";

export const StylesSection7 = styled.div`
  width: 100%;
  min-height: 100vh; 
  color: white;
  margin-top: 10px;
  background-color: black;
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  padding: 40px 0;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .content-section h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .cards {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .faq-item {
    background-color: #2b2929ff;
    margin-bottom: 15px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 6px;
  }

  .faq-item:hover {
    background-color: #363434ff;
  }

  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-header p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  .faq-header span {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .faq-item.active .faq-header span {
    transform: rotate(180deg);
  }

  .faq-answer {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #b3b3b3;
    line-height: 1.4rem;
    transition: opacity 0.3s ease;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .faq-item.active .faq-answer {
    opacity: 1;
    max-height: 500px; 
  }


  @media screen and (min-width: 530px) {
    .content-section h3 {
      font-size: 1.6rem;
    }

    .faq-header p {
      font-size: 1.1rem;
    }

    .faq-header span {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h3 {
      font-size: 2rem;
    }

    .cards {
      font-size: 1.2rem;
    }

    .faq-header p {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h3 {
      font-size: 2.2rem;
    }

    .faq-header p {
      font-size: 1.3rem;
    }

     .faq-answer {
      font-size: 1.2rem;

    }
  }
`;
