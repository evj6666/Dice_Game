import React from 'react'
import styled from 'styled-components';
const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer = styled.div`
    width: 800px;
    background-color:#FBF1F1;
    padding: 20px;
    margin: 20px auto;
    h1{
        line-height: 36px;
        size: 24px;
    }
    p{
        line-height: 24px;
        size: 16px;
    }

    
`
