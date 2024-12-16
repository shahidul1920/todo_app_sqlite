'use client'

import React, { useTransition } from 'react'
import { completeTodo } from '../utils/actions'
import { deleteTodo } from '../utils/actions'

const Todo = ({ todo }) => {
  const [isPainding, startTransition] = useTransition()
  return (
    <div className={`border border-black/20 ${todo.completed && 'text-green-400'}`} onClick={() => startTransition(() => completeTodo(todo.id))}>
      <div className='p-[1rem] cursor-pointer'>
        {todo.content}
        <button onClick={() => startTransition(() => deleteTodo(todo.id))} className='p-[1rem] border border-red-400 rounded'>Remove</button>
      </div>

    </div>
  )
}

export default Todo