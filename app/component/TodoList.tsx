import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div className='mt-[2rem] flex gap-[1rem] flex-wrap'>{todos.map((todo) =>(
        <Todo todo={todo} key={todo.id} />
    ))}</div>
  )
}

export default TodoList