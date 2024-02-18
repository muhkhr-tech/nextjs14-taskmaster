'use server'

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function GetTodos() {
  const data = await db.select().from(todos).where(eq(todos.status, 'do'))
  return data
}