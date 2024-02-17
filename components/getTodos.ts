'use server'

import { db } from "@/db";
import { todos } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export default async function GetTodos() {
    const today = new Date().setHours(0, 0, 0, 0)
    const data = await db.select().from(todos).where(and(eq(todos.status, 'do'), eq(todos.createdAt, today)))
    
    return data
}