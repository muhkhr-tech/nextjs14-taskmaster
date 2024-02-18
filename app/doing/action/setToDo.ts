'use server'

import { db } from "@/db"
import { todos } from "@/db/schema"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

export default async function SetToDo(todoId: any) {
  await db.update(todos).set({
    'status': 'do'
  }).where(eq(todos.id, todoId))

  redirect('/doing')
}