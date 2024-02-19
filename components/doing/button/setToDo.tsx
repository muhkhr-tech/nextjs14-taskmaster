'use client'

import SetToDo from "@/app/doing/action/setToDo"
import GetTodos from "@/app/projects/action/getTodos"
import { useState } from "react"

export default function SetToDoButton({ todoId, status, projectId, onStateChange }: any) {
  const [updatedStatus, setUpdatedStatus] = useState(status)
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const todoStatus = await SetToDo(todoId, projectId)
      setUpdatedStatus(todoStatus)
      const updatedTodos = await GetTodos(projectId)
      onStateChange(updatedTodos)
    } catch (err) { console.log(err) }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading || status==="do"}
        className={`btn btn-xs disabled:bg-purple-700 disabled:text-white`}>
        {isLoading ? <span className="loading"></span> : 'Do'}
      </button>
    </>
  )
}