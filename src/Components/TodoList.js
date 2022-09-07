import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
    
        if(!todo.text || /^\$*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];  
        setTodos(newTodos);
    }
    //edit todo
    const updatedTodos = (todoId, newValue) => {
        console.log(todoId, newValue)
        if(!newValue.text || /^\$*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue:item)))
    }

    //to remove the todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    

    const completeTodo =id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    }

  return (
    <div>
        <h1>What's your plan for today?</h1>
        <TodoForm onSubmit = {addTodo}/>
        <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} updatedTodos = {updatedTodos}/>
    </div>
  )
}

export default TodoList
