'use client'

import GetTodos from "@/app/projects/action/getTodos"
import SetToDoing from "@/app/todos/action/setToDoing"
import { useState } from "react"
import { HiOutlineArrowLongRight } from "react-icons/hi2"

export default function SetToDoingButton({ todoId, status, projectId, onStateChange}: any) {
  const [updatedStatus, setUpdatedStatus] = useState(status)
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const todoStatus = await SetToDoing(todoId, projectId)
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
        disabled={isLoading || status==='doing'}
        className="btn btn-xs disabled:bg-warning disabled:text-white">
        {isLoading ? <span className="loading"></span> : 'Doing'}
      </button>
    </>
  )
}