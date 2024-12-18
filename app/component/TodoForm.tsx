import React from 'react'
import { newTodo } from '../utils/actions'

export const TodoForm = () => {

    return (
        <div className='mt-[2rem]'>
            <form action={newTodo}>
                <h1 className='text-2xl uppercase'>input here</h1>
                <input name='cont' type="text" className='bg-green-400' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
