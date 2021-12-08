import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

export default function Form() {

  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }
  


  return (
    <div
    className=" bg-blue-50 border border-purple-300 p-2 mt-2 rounded ">
      <header >
        <h1 className=" mt-5 bg-gray-100 text-gray-600 font-bold  border p-2 rounded-full "> Список завдань: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}
