'use client'

import React, { useTransition } from 'react'
import { completeTodo } from '../utils/actions'
import { deleteTodo } from '../utils/actions'

const Todo = ({ todo }) => {
  console.log(todo.createdAt);
  
  const [isPainding, startTransition] = useTransition()
  
  return (
    <div
      className={`border border-gray-300 rounded-lg shadow-sm p-4 mb-4 flex justify-between items-center cursor-pointer gap-4 capitalize ${todo.completed ? 'bg-green-50 text-green-500' : 'bg-white'
        }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      <div className="flex items-center gap-4">
        <p className={`text-lg font-medium ${todo.completed && 'line-through'}`}>
          {todo.content}
          
        </p>
        
        <p className='text-[14px]'>
        {new Date(todo.createdAt).toLocaleString()}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          startTransition(() => deleteTodo(todo.id));
        }}
        className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
      >
        Remove
      </button>
    </div>

  )
}

export default Todo