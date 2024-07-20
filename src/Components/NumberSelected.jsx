import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelected = ({selectValue,SetSelectedValue,error,SetError}) => {
    let numberArr=[1,2,3,4,5,6];
  return (
    <NumberSelectedContainer>
        <h3>{error}</h3>
    <div className='flex'>
        {
            numberArr.map((ele,i) => (
                <Box 
                isSelected={ele===selectValue}
                onClick={()=> {
                    SetSelectedValue(ele)
                    SetError("")
                }   
            }
                key={i}>{ele}</Box>
            ))
        }
    </div>
    <p>Selected Number</p>
    </NumberSelectedContainer>
  )
    }                               

export default NumberSelected;

const NumberSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
       .flex{
        display: flex;
        gap: 24px;
       }
       p{
        font-size: 24px;
        font-weight:700;
       }
       h3{
        color: red;
       }
    
`
const Box =styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color:${(props) => props.isSelected ? "black" : "white"};
    color:${(props) => props.isSelected ? "white" : "black"};
    cursor: pointer;
`;
