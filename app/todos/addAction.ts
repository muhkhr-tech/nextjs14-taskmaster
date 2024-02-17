'use server'

import { db } from "@/db"
import { todos } from "@/db/schema"
import { redirect } from "next/navigation"

export default async function AddAction(title: any) {
  await db.insert(todos).values({
    'title': title,
    'status': 'do'
  })

  redirect('/todos')
}