'use client'

import SetToDo from "@/app/doing/action/setToDo"
import { useState } from "react"
import { HiOutlineArrowLeft } from "react-icons/hi2"

export default function SetToDoButton({ todoId }: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDo(todoId)
    } catch (err) { console.log(err) }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="btn btn-xs bg-purple-700 text-white hover:bg-purple-500">
        <HiOutlineArrowLeft /> {isLoading ? <span className="loading"></span> : 'Do'}
      </button>
    </>
  )
}