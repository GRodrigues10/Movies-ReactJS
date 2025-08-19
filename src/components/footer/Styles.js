import styled from "styled-components";

export const StylesFooter = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 10px;
  background-color: black;
  color: white;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .content-section .text1 {
    width: 90%;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .content-section .content-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  .content-section .content-controls input {
    width: 100%;
    padding: 15px;
    background-color: #000000a8;
    border: 1px solid #423e3eff;
    border-radius: 5px;
    max-width: 400px;
    color: white;
  }

  .content-section .content-controls button {
    margin-top: 12px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: #e50914;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    margin-bottom: 20px;

    &:hover {
      background-color: #be0811ff;
    }
  }
  .doubt-container {
    margin-top: 20px;
    margin-bottom: 50px;
    align-items: start;
    width: 90%;
  }

  .doubt-container span {
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: #8d8585ff;

    }

  }
  .doubt {
    color: #b3b3b3;
  }

  .p1 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .p1 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p2 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

   .p2 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p3 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }
   .p3 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p4 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    color: #b3b3b3;
    text-decoration: underline;
    margin-bottom: 10px;
    cursor: pointer;
  }

   .p4 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .p5 {
    width: 90%;
    font-size: 0.9rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    color: #b3b3b3;
    text-decoration: underline;
    cursor: pointer;
  }

   .p5 p{
    &:hover{
        color: #8d8585ff;
    }
  }

  .final {
    width: 90%;
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 50px;
    color: #b3b3b3;
  }

  select {
    padding: 5px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 0.75rem;
    text-align: center;
    background-color: #0000008c;
    color: white;
    font-size: 1rem;
    width: 150px;
    text-align: center;
    margin-bottom: 30px;
  }

  option {
    background-color: white;
    color: black;
  }

  .final p {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 600px) {
    .content-section .content-controls {
      flex-direction: row;
      width: 100%;
      gap: 10px;
      margin-bottom: 35px;
    }

    .content-section .content-controls input {
      padding: 15px;
      font-size: 1rem;
    }

    .content-section .content-controls button {
      margin-bottom: 0;
      margin-top: 0;
      padding: 15px;
      font-size: 1rem;
    }
    .p1 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .p2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .p3 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .p4 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .content-section .text1 {
      font-size: 1.1rem;
    }
    .content-section p {
      font-size: 1.1rem;
    }

    .content-section .content-controls input {
      font-size: 1.1rem;
    }
    .content-section .content-controls button {
      font-size: 1.1rem;
    }
    select {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section .text1 {
      font-size: 1.2rem;
    }

    .content-section .content-controls input {
      font-size: 1.2rem;
    }
    .content-section .content-controls button {
      font-size: 1.2rem;
    }
    select {
      font-size: 1.2rem;
    }

    .p1 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .p2 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .p3 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .p4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
