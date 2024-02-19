'use client'

import GetProjects from "@/app/projects/action/getProjects"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import AddTodosProjectButton from "./button/addTodos"
import ProjectDetailButton from "./button/detail"
import LoadingSkeleton from "./loadingSkeleton"

export default function DisplayProjects() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const respData: any = await GetProjects(status)
        setData(respData)
      } catch (err) { console.log(err) }
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [status])

  return (
    <>
      {isLoading ? <LoadingSkeleton />
        : <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
          {data.map((item: any, index: any) => (
            <div key={index} className="relative border p-4 rounded-md shadow-md">
              <h4 className="text-lg">{item.title}</h4>
              <p className="mb-2 text-xs text-slate-700">{new Intl.DateTimeFormat('id', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format(item.dueDate)}</p>
              <div className="mb-2 flex gap-1 text-xs">
                <p>Total ({item.totalTodos}) |</p>
                <p className="text-warning">In Progress ({item.totalTodosInprogress}) |</p>
                <p className="text-success">Completed ({item.totalTodosCompleted})</p>
              </div>
              <div className="text-slate-500 mb-10">{item.description.slice(0, 100)}...</div>
              <div className="flex justify-between items-center">
                <div className="text-xs uppercase">Status : {item.status}</div>
                <div className="flex justify-end gap-2">
                  <AddTodosProjectButton projectId={item.id} />
                  <ProjectDetailButton projectId={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>}
    </>
  )
}