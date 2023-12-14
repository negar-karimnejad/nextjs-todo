"use server"
import { revalidatePath } from "next/cache"
import prisma from "./db"


export async function create(prevState: any,formData:FormData) {
    "use server"
    
try {
    const input =formData.get("input") as string
    if(!input){throw new Error("Input is empty")}

    await prisma.todo.create({
        data:{
            input:input,
        },
    })

    revalidatePath("/")
    
} catch (error) {
    return "Faild to create."
}
    
}

export async function editTodo(formData:FormData) {
    "use server"   

    const input = formData.get("input") as string
    const todoId = formData.get("todoId") as string

    await prisma.todo.update({
        where:{
            id:todoId
        },
        data:{
            input:input,
        }
    })

    revalidatePath("/")
}

export async function deleteTodo(formData:FormData) {
    "use server"    

    const todoId=formData.get("todoId") as string

    await prisma.todo.delete({
        where:{
            id:todoId
        }
    })
    
    revalidatePath("/")
}