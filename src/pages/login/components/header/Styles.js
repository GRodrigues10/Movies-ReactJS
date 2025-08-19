import styled from "styled-components";

export const  StylesHeader = styled.div `

    
  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.9) 0%,
  rgba(0, 0, 0, 0.6) 40%,
  rgba(0, 0, 0, 0.47) 70%,
  rgba(0, 0, 0, 0.07) 100%
);
    img{
        width: 120px;
        margin-left: 20px;
        margin-top: 20px;
    }

    @media screen and (min-width:530px) {
          img{
        width: 150px;
        
    }
    }

      @media screen and (min-width:768px) {
          img{
        width: 170px;
        
    }
    }

       @media screen and (min-width:992px) {
          img{
        width: 180px;
        
    }
    }

       @media screen and (min-width:1200px) {
          img{
        width: 200px;
        
    }
    }


`