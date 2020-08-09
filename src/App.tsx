import React, {
  useState,
  useEffect,
  FC
} from "react";
import Navbar from './components/Navbar'
import Container from './components/Container'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {ITodoItem} from './interfaces'



const App: FC = () => {

  const [todos, setTodos] = useState<ITodoItem[]>([])

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodoItem[]
    setTodos(localTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (title: string):void => {
    const todo: ITodoItem = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [todo, ...prev])
  }

  const toggleTodoHandler = (id: number):void => {
    setTodos(prev => 
      prev.map(todo => {
        if (todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        }
        return todo;
      }))
  }

  const deleteTodoHandler = (id: number): void => {
    setTodos(prev => prev.filter(todo => {
      if (todo.id !== id) return true
      return false
    }))
  }

  return (  
    <>
      <Navbar />
      <Container>
        <TodoForm onAdd={addTodoHandler} />
        <TodoList todos={todos} 
        onToggle={toggleTodoHandler} 
        onDelete={deleteTodoHandler}
        />
      </Container>
      
    </>
  );
}

export default App;
