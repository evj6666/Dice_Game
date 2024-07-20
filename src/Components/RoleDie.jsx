import React from 'react'
import styled from 'styled-components';
import dice1 from "../assets/dice/dice_1.png";
import dice2 from "../assets/dice/dice_2.png";
import dice3 from "../assets/dice/dice_3.png";
import dice4 from "../assets/dice/dice_4.png";
import dice5 from "../assets/dice/dice_5.png";
import dice6 from "../assets/dice/dice_6.png";



const RoleDie = ({ currentNumber, setCurrentNumber, toggle }) => {
  let arr =[dice1,dice2,dice3,dice4,dice5,dice6];
  return (
    <RoleDieContainer>
      <div className='dice' onClick={toggle}>
        <img
          src={arr[currentNumber-1]} alt="not found" />

      </div>
      <p>click on die to role</p>
    </RoleDieContainer>

  )
}

export default RoleDie;
const RoleDieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    .dice{
      cursor: pointer;
    }
    p{
      font-size: 24px;
    }
    
`
