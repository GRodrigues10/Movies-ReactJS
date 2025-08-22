import styled from "styled-components";
import background from "../../assets/background.jpg";

export const StylesSection1 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center left;
  background-size: cover;
  color: white;
  justify-content: center;
  align-items: center;
  
 



  .content-section{
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
  }
  
  .content-section h1{
    font-family: 'Bebas Neue';
    font-size: 2.3rem;
    text-align: center;
    width: 80%;
    text-shadow: 2px 2px 4px #000000c2;
  }

    .content-section p{
    font-size: 1rem;
    text-align: center;
    width: 80%;
    text-shadow: 2px 2px 4px #000000c2;
    
  }
   .content-section .controls{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

  }

  .content-section .p2{
    font-size: 1rem;
    text-align: center;
    width: 80%;
  }

  .content-section input{
    width: 80%;
    padding: 15px;
    background-color: #000000a8;
    border: 1px solid #423e3eff;
    border-radius: 5px;
    max-width: 400px;
    color: white;
  }

  .content-section button{
    margin-top: 12px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: #e50914;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: .4s ease;
    

    &:hover{
    background-color: #be0811ff;

    }
  }
.content-section button span{
    font-family:sans-serif;
}

@media screen and (min-width:530px){
    .content-section h1{
        font-size: 2.4rem;
    }

     .content-section p{
        font-size: 1rem;
    }

     .content-section .p2{
        font-size: 1rem;
    }

    .content-section button{
        font-size: 1.3rem;
    }
}


@media screen and (min-width:768px){
    background-attachment: fixed;
    .content-section h1{
        font-size: 2.8rem;
    }

      .content-section p{
        font-size: 1.1rem;
    }

     .content-section .p2{
        font-size: 1.1rem;
    }


    .content-section .controls{
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
    }

     .content-section input{
        width: 100%;
        font-size: 1.3rem;
        padding: 15px;
    }

    .content-section button{
        font-size: 1.3rem;
        padding: 15px;
        margin-top: 0;
    }
}
 @media screen and (min-width:992px){
    .content-section h1{
        font-size: 3.1rem;
    }

     .content-section p{
        font-size: 1.2rem;
    }

     .content-section .p2{
        font-size: 1.2rem;
    }


    .content-section .controls{
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
    }

     .content-section input{
        font-size: 1.3rem;
        padding: 15px;
    }

    .content-section button{
        font-size: 1.3rem;
        padding: 15px;
        margin-top: 0;
    }
}

@media screen and (min-width:1200px){
   
    .content-section h1{
        
        font-size: 4rem;
    }


    .content-section .controls{
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
        
    }
       .content-section p{
        font-size: 1.5rem;
    }

     .content-section .p2{
        font-size: 1.5rem;
    }

     .content-section input{
        font-size: 1.5rem;
        padding: 15px;
    }

    .content-section button{
        font-size: 1.5rem;
        padding: 15px;
        margin-top: 0;
        width: 170px;
    }
}
  
  `
