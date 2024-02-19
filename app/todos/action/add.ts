'use server'

import { db } from "@/db"
import { todos } from "@/db/schema"

export default async function AddTodo({projectId}: any, todosData: any) {
  todosData.map( async (todo: string) => (
    await db.insert(todos).values({
      'title': todo,
      'status': 'do',
      'projectId': projectId
    })
  ))
}