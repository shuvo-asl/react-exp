import React from 'react'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Todo } from '../components/todos/Todo';

function Todos({title}){
    document.title = title;
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((json)=>{
        setTodos(json)
      })
    },[]);
    return(
     <Container>
          <div className='row'>
              <div className='col-12'>
              <div className='status text-center'>All Posts</div>
              </div>
          </div>
          <div className='row'>
              {todos.map((item,index)=>{
                  return <Todo key={index} post={item}/>
              })}
          </div>
     </Container>
    )
  }

export default Todos