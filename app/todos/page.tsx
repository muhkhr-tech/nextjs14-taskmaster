import AddTodo from "./add";
import GetTodos from "@/components/getTodos";
import SetToDoingButton from "@/components/todos/button/setToDoing";

export default async function TodosPage() {
  const data = await GetTodos()

  return (
    <div className="sm:border border-purple-700">
      <div className="flex justify-between bg-purple-700 p-3">
        <h1 className="text-center text-white mb-0 mt-1">TODO</h1>
        <AddTodo />
      </div>
      <div className="p-3 text-xs">
        {data.map((item: any, index: any) => (
          <div key={index} className="mb-1">
            <ol>
              <li className="flex justify-between items-center">
                <div>{index + 1}. {item.title}</div>
                <SetToDoingButton todoId={item.id}/>
                </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  )
}