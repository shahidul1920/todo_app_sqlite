import React from 'react'
import { newTodo } from '../utils/actions'

export const TodoForm = () => {

    return (
        <div className="w-full mt-8 flex justify-center">
            <form
                className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
                action={newTodo}
            >
                <h1 className="text-3xl font-bold text-center uppercase text-gray-800 mb-6">
                    Add your todo / daily list
                </h1>
                <div className="mb-4">
                    <input
                        name="cont"
                        type="text"
                        placeholder="Enter your text..."
                        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}
