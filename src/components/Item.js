import React from 'react';
import styled from 'styled-components'




export function Item({ item, index, completeItem, deleteItem }) {
  return (
    <StyledItem completed={item.completed}>
      <span>{item.title}</span>
      <Button  onClick={() => completeItem(index)}> Done </Button>
      <Button primary onClick={() => deleteItem(index)}> x </Button>
      
    </StyledItem>
  );
}


const StyledItem = styled.div`
  background: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  padding: 3px 10px;
  font-size: 15px;
  margin-bottom: 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  justify-content: space-between;

    span {
      text-decoration: ${props => props.completed ? 'line-through' : ''};
    }


`

const Button = styled.button`
  display:inline-flex;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 6px;
  padding: 0.25em 1em;
  background: ${props => props.primary ? "white": "palevioletred" };
  color: ${props => props.primary ? "palevioletred": "white"};
  margin-left: ${props => props.primary? "1px" : "270px"}
`