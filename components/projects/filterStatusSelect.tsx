'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function FilterStatusSelect() {
  const [status, setStatus] = useState('')
  const router = useRouter()

  const handleChange = (e: any) => {
    setStatus(e.target.value)
  }

  useEffect(() => {
    router.push('/projects?status='+status)
  }, [status])

  return (
    <select name="" id=""
      value={status}
      onChange={handleChange}
      className="select select-bordered select-xs">
      <option value="do">TODO</option>
      <option value="inprogress">IN PROGRESS</option>
      <option value="completed">COMPLETED</option>
    </select>
  )
}