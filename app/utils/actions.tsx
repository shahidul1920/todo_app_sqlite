'use server'
import { revalidatePath } from 'next/cache';
import db from './db'


export const completeTodo = async (id) => {
    await db.todo.update({
        where: { id },
        data: {
            completed: true,
        }
    })
    revalidatePath('/todos')
}

export const deleteTodo = async (id) => {
    await db.todo.delete({
        where:{id},
    })
    revalidatePath('/todos')
}

export const newTodo = async (formData) => {
    console.log(formData);

    const todo = await db.todo.create({
        data: {
            content: formData.get('cont'),

        },
    })

    revalidatePath('/todos')
}