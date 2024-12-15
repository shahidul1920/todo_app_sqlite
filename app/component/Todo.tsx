'use client'

import React, { useTransition } from 'react'
import { completeTodo } from '../utils/actions'


const Todo = ({ todo }) => {
  const [isPainding, startTransition] = useTransition()
  return (
    <div className={`border border-black/20 ${todo.completed && 'text-green-400'}`} onClick={() => startTransition(() => completeTodo(todo.id))}>
      <p className='py-[1rem] pl-[1rem] cursor-pointer'>
        {todo.content}

      </p>

    </div>
  )
}

export default Todo 