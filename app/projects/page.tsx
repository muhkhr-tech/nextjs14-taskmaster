import AddProjectButton from "@/components/projects/button/add";
import FilterStatusSelect from "@/components/projects/filterStatusSelect";
import DisplayProjects from "@/components/projects/display";

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1>PROJECTS</h1>
        <div className="flex items-center">
          <FilterStatusSelect />
        </div>
        <AddProjectButton />
      </div>
      <DisplayProjects />
    </div>
  )
}