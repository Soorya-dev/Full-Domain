import React, { useState } from 'react'

const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue("")
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div>
      <h1>ToDO List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleChange} placeholder='Add new ToDO' />
        <button type='submit'>Add ToDo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>

  )
}

export default ToDoList