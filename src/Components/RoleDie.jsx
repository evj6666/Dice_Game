import React, { useState } from 'react'
import styled from 'styled-components';
const RoleDie = ({currentNumber,setCurrentNumber,toggle}) => {
  
 
  return (
    <RoleDieContainer>
        <div className='dice' onClick={toggle}>
            <img 
            src={`/dice/dice_${currentNumber}.png`} alt="not found" />
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
