import React, { useState } from 'react';
import  "./App.css"
import { Item } from './components/Item';
import { Form } from './components/Form';
import styled from 'styled-components'



function App() {
 const[todos, updateTodos] = useState([
   {
     title: 'read a book',
     completed: false
   },
   {
    title: 'learn node.js',
    completed: false
  },
  {
    title: 'go climbing',
    completed: false
  },
 ])
   

 const addTodo = (title) => {
   let newTodos = [...todos, { title }]
   updateTodos(newTodos)
 }


 const completeItem = (index) => {
   let newTodos = [...todos];
   newTodos[index].completed = true;
   updateTodos(newTodos);
 }

 const deleteItem = (index) => {
   let newTodos = [...todos];
   newTodos.splice(index,1);
   updateTodos(newTodos)
 }

 return(
   <Wrapper>
     <Title> To do list</Title>
      <Form  addTodo={addTodo} />
      {todos.map((item,index)=>(
       <Item item={item} key={index} index={index} completeItem={completeItem} deleteItem={deleteItem}/>
     )
     )}
   
   </Wrapper>
 )
 
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`


const Wrapper = styled.section`
  font-family: sans-serif;
  text-align: center;
  margin: 20px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 500px;
  height: 500px;
  padding: 30px;
  line-height: 0px;
  background-color: #ebecf1;
`;


export default App

