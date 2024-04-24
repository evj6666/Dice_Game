import styled from "styled-components";
export const Button = styled.button`
      color:white;
      padding:10px 18px;
      background:black;
      border-radius:5px;
      min-width:220px;
      border: none;
      font-size: 16px;
      transition: 0.4s background ease-in;
      cursor: pointer;

      &:hover{
        background-color:white;
        color: black;
        border: 2px solid black;
        transition: 0.3s background ease-in;
      }
`;
export const OutletButton = styled(Button)`
       color: black;
       border: 1px solid black;
       background:white;
    &:hover{
        background-color:black;
        color: white;
        transition: 0.3s background ease-in;
    }


`