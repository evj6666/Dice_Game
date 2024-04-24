import React from "react";
import styled from "styled-components"
import { Button } from "../Styled/Button";
const StartGame = ({toggleGame}) => {
  return (
    <Container>
        <div>
           <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggleGame}>play now</Button>
        </div>
    </Container>
    
  )
}

export default StartGame;

const Container = styled.div`
       max-width:1180px;
       display: flex;
       margin: 0 auto;
       align-items: center;
       justify-content: center;
       .content h1{
        font-size:96px;
        white-space: nowrap;
       }
      `;


