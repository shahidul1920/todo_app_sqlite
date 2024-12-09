import React from 'react'
import db from '@/app/utils/db'
import TodoList from '@/app/component/TodoList'

const bringData = async ()=>{
  const todos = await db.todo.findMany({})
  return todos
}

export default async function todoPage() {
  const todos = await bringData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
