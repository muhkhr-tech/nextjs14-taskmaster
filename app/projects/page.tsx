import AddProjectButton from "@/components/projects/button/add";
import GetProjects from "./action/getProjects";
import ProjectDetailButton from "@/components/projects/button/detail";

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const data = await GetProjects()

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1>PROJECTS</h1>
        <AddProjectButton/>
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
            <div className="text-slate-500 mb-2">{item.description}</div>
            <ProjectDetailButton projectId={item.id} />
          </div>
        ))}
      </div>
    </div>
  )
}