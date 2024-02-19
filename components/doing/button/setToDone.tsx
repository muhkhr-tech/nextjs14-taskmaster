'use client'

import SetToDone from "@/app/doing/action/setToDone"
import GetTodos from "@/app/projects/action/getTodos"
import { useState } from "react"

export default function SetToDoneButton({ todoId, status, projectId, onStateChange}: any) {
  const [updatedStatus, setUpdatedStatus] = useState(status)
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const todoStatus =  await SetToDone(todoId, projectId)
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
        disabled={isLoading || updatedStatus==='done'}
        className="btn btn-xs disabled:bg-green-700 disabled:text-white">
        {isLoading ? <span className="loading"></span> : 'Done'}
      </button>
    </>
  )
}