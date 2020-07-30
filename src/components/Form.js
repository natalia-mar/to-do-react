import React, { useState } from 'react';
import styled from 'styled-components'


export function Form({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value)
      return;
    addTodo(value);
    setValue("");
  };

  return (
    
    <StyledForm onSubmit={handleSubmit}>
      <Input
        placeholder="plan ahead!"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)} />
    </StyledForm>
   
  );
}

const StyledForm = styled.form `
  display: flex;
  padding: 0;
  align-items: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  padding: 0.7em;
  color: "palevioletred";
  background: white;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 900px;
`;
