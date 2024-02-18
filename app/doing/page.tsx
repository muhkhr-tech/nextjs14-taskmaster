import SetToDoButton from "@/components/doing/button/setToDo";
import SetToDoneButton from "@/components/doing/button/setToDone";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const dynamic = 'force-dynamic'

export default async function DoingPage() {
  const today = new Date().setHours(0, 0, 0, 0)
  const data = await db.select().from(todos).where(eq(todos.status, 'doing'))

  return (
    <div className="sm:border border-yellow-400">
      <div className="flex justify-between bg-yellow-400 p-3">
        <h1 className="text-center mb-0 mt-1">DOING</h1>
      </div>
      <div className="p-3 text-xs sm:text-sm">
        {data.map((item: any, index: any) => (
          <div key={index} className="mb-1">
            <div className="flex justify-between items-center">
              <p className="">{index + 1}. {item.title}</p>
              <div className="flex">
                <SetToDoButton todoId={item.id} />
                <SetToDoneButton todoId={item.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}