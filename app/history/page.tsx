import { db } from "@/db"
import { todos } from "@/db/schema"
import { desc, sql } from "drizzle-orm"
import { HiOutlineCheckCircle, HiOutlineExclamationTriangle } from "react-icons/hi2"

export default async function HistoryPage() {
  // const data = await db.select({
  //   createdAt: todos.createdAt,
  //   data: sql.raw(`
  //     json_group_array(
  //       json_object(
  //         'status', todos.status, 
  //         'title', todos.title
  //       )
  //     ) as data
  //   `),
  // }).from(todos).groupBy(todos.createdAt).orderBy(desc(todos.createdAt))

  const data = await db.select().from(todos)

  const formatDate = (date: any) => {
    const dateFormatted = new Date(date)
    return dateFormatted
  }

  return (
    <div className="sm:border border-slate-400">
      <div className="flex justify-between bg-slate-400 p-3">
        <h1 className="text-center mb-0 mt-1 text-white">HISTORY</h1>
      </div>
      <div className="p-3 text-xs sm:text-sm">
        {data.map((item: any, index: any) => (
          <div key={index} className="mb-1 border-b-2">
            {/* <p className="font-semibold">{new Intl.DateTimeFormat('id', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(formatDate(item.createdAt))}</p> */}
            {/* {JSON.parse(item.data).map((row: any, idx: any) => (
              <div key={idx} className="flex justify-between items-center">
                <p className={`${row.status != 'done' ? 'text-red-500': 'text-success line-through'}`}>{idx + 1}. {row.title}</p>
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  )
}