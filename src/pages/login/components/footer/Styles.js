import styled from "styled-components";

export const StylesFooter = styled.div`
  background-color: #151515;
  width: 100%;
  padding: 10px;
  color: #bbaeaeff;
  .content-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .content-section .doubt {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-decoration: none;
    cursor: text;
    &:hover {
      color: #bbaeaeff;
    }
  }
  .content-section .questions {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .content-section p {
    width: 100%;
    text-decoration: underline;
    margin-top: 10px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: #998c8cff;
    }
  }
  select {
    padding: 5px;
    font-weight: normal;
    border-radius: 5px;
    font-size: 0.9rem;
    text-align: center;
    background-color: #0000008c;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 150px;
  }

  option {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 0px;
    .content-section p {
      font-size: 1.1rem;
    }
    select {
      font-size: 1.1rem;
      max-width: 160px;
    }
  }
`;
