import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div className='max-w-[380px] mx-auto mt-[2rem] flex flex-col gap-[1rem] flex-wrap'>{todos.map((todo) =>(
        <Todo todo={todo} key={todo.id} />
    ))}</div>
  )
}

export default TodoList