import SetToDoingButton from "@/components/done/button/setToDoing";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export default async function DonePage() {
  const today = new Date().setHours(0, 0, 0, 0)
  const data = await db.select().from(todos).where(and(eq(todos.status, 'done'), eq(todos.createdAt, today)))

  return (
    <div className="sm:border border-green-400">
      <div className="flex justify-between bg-green-400 p-3">
        <h1 className="text-center mb-0 mt-1 text-white">DONE</h1>
      </div>
      <div className="p-3 text-xs">
        {data.map((item: any, index: any) => (
          <div key={index} className="mb-1">
            <div className="flex justify-between items-center">
              <p className="">{index + 1}. {item.title}</p>
              <div className="flex">
                <SetToDoingButton todoId={item.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}