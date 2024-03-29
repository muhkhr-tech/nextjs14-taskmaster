'use client'

import SetToDoing from "@/app/done/action/setToDoing"
import { useState } from "react"
import { HiOutlineArrowLeft } from "react-icons/hi2"

export default function SetToDoingButton({ todoId }: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDoing(todoId)
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
        className="btn btn-xs btn-warning">
        <HiOutlineArrowLeft /> {isLoading ? <span className="loading"></span> : 'Doing'}
      </button>
    </>
  )
}