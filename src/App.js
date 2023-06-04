import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([

  ])

  const ref = useRef(null)


  const addTodo = (e)=>{
    e.preventDefault()
    setTodos([...todos, {id: `${Math.random()*10}-${Math.random()*10}`,  title: ref.current.value, completed: false}])
    ref.current.value = ''
  }

  useEffect(()=>{
    getTodos()
  },[])

  const deleteTodo = (id)=>{
    // let arr = []
    // for(let i = 0; i< todos.length; i++){
    //   if(todos[i].id!==id){
    //     arr.push(todos[i])
    //   }
    // }
    // setTodos(arr)
    setTodos(todos.filter(item=> item.id!==id))
  }

  const updateTodo = (id)=>{
    // let arr = []
    // for(let i = 0; i< todos.length; i++){
    //   if(todos[i].id===id){
    //     arr.push({
    //       name: todos[i].name,
    //       id: todos[i].id,
    //       completed: !todos[i].completed
    //     })
    //   }else{
    //     arr.push(todos[i])
    //   }
    // }

    // setTodos(arr)

    setTodos(todos.map(item=> item.id===id? ({
      ...item,
      completed: !item.completed
    }): item))
  }

  const getTodos =async()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(data=> data.json())
    .then(res=> setTodos(res))
  }

  console.log('todos: ', todos)
  return (
    <div style={{
      width: '500px', 
      border: '1px solid black', 
      marginTop: '50px',
      marginLeft: 'auto', 
      marginRight: 'auto',
      padding: '20px',
      textAlign: 'center'
    }}>
     <h1>Todo Lists</h1>
     <form onSubmit={addTodo}>
      <input required ref = {ref}type='text'/>
      <input type='submit' value='add'/>
     </form>
     <ul style={{listStyle: 'none', maxHeight: '60vh', overflow: 'auto', padding: '20px'}}>
      {todos.length?
        todos.map((item, index)=>(
          <li
          style={{
            textDecoration: item.completed?  'line-through': 'none',
            color: item.completed?  'gray': 'black',
            display: 'flex',
            justifyContent: 'space-between'
          }}
          key={index}>
            <input
            onClick={()=> updateTodo(item.id)}
            defaultChecked={item.completed}
            type='checkbox'/>
            {item.title} <button 
          onClick={()=> deleteTodo(item.id)}
          style={{fontSize: '14px', }}>O'chirish</button></li>
        )): <h3>Todo topilmadi</h3>
      }
     </ul>
    </div>
  );
}

export default App;
