import React, { useState } from 'react';

import TotalScore from './TotalScore'
import NumberSelected from './NumberSelected'
import styled from 'styled-components'
import RoleDie from './RoleDie'
import { Button } from '../Styled/Button';
import { OutletButton } from '../Styled/Button';
import Rules from './Rules';
const GamePLay = () => {
  let[selectValue,SetSelectedValue]=useState(0);
  let [currentNumber,setCurrentNumber] =useState(1);
  let [totalScore,SetTotalScore] =useState(0);
  let [error,SetError]=useState("");
  let [rules,setRules]=useState(false);

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }
  function toggle() {
    if(selectValue=== 0 || selectValue=== undefined ){
      SetError("You have not selected any number");
      return;
    }
    SetError("")
    let random = getRandomInt(1,7);
    setCurrentNumber(random);
    console.log(random)
    if(selectValue === random) SetTotalScore(totalScore + selectValue);
    else SetTotalScore(totalScore - 2)
    SetSelectedValue(undefined);
}

function TotalScoreZero()
{
  SetTotalScore(0);
}
function ToggleRules()
{
  setRules(prev => !prev)
}

  return (
    <MainContainer >
        <div className="top-section">
           <TotalScore totalScore={totalScore}/>
           <NumberSelected selectValue={selectValue}  SetSelectedValue={SetSelectedValue} SetError={SetError} error={error}/>
        </div>
        <RoleDie currentNumber={currentNumber} setCurrentNumber={setCurrentNumber} toggle={toggle}/>
        <div className="btns">
          <OutletButton onClick={TotalScoreZero}>Reset Score</OutletButton>
          <Button onClick={ToggleRules}>{rules ? "Hide " : "Show "} Rules</Button>
        </div>
        {rules && <Rules/>}
    </MainContainer>
  )
}

export default GamePLay;
const MainContainer = styled.main`
    padding: 60px;
    .top-section{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btns{
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
`
