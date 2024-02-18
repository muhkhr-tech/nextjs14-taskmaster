'use client'

import SetToDone from "@/app/doing/action/setToDone"
import { useState } from "react"
import { HiOutlineArrowRight } from "react-icons/hi2"

export default function SetToDoneButton({ todoId }: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDone(todoId)
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
        className="btn btn-xs bg-green-700 text-white hover:bg-green-500">
        Done {isLoading ? <span className="loading"></span> : <HiOutlineArrowRight />}
      </button>
    </>
  )
}