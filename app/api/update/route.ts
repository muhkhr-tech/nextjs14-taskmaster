import { db } from "@/db"
import { todos } from "@/db/schema"
import { lt } from "drizzle-orm"

export async function GET(request: Request) {
  // const date = new Date('2024-02-15').setHours(0, 0, 0, 0)

  // const resp = await db.update(todos).set({ createdAt: date }).where(lt(todos.id, 100))

  return new Response('ok')
}