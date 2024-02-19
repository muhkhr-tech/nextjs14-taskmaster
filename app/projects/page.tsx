import AddProjectButton from "@/components/projects/button/add";
import GetProjects from "./action/getProjects";
import AddTodosProjectButton from "@/components/projects/button/addTodos";
import ProjectDetailButton from "@/components/projects/button/detail";

export const dynamic = 'force-dynamic'

export default async function ProjectsPage(request: Request) {
  const data = await GetProjects()

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1>PROJECTS</h1>
        <div className="flex items-center">
          <select name="" id="" className="select select-bordered select-xs">
            <option value="todo">TODO</option>
            <option value="inprogress">IN PROGRESS</option>
            <option value="completed">COMPLETED</option>
          </select>
        </div>
        <AddProjectButton />
      </div>
      <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
        {data.map((item: any, index: any) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
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
            <div className="text-slate-500 mb-4">{item.description}</div>
            <div className="flex justify-between items-center">
              <div className="text-xs uppercase">Status : {item.status}</div>
              <div className="flex justify-end gap-2">
                <AddTodosProjectButton projectId={item.id} />
                <ProjectDetailButton projectId={item.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}