'use client'

import AddTodo from "@/app/projects/action/addTodo"
import { ReactEventHandler, useState } from "react"

export default function AddTodoButton(projectId: any) {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [tempData, setTempData] = useState<string[]>([])

  const handleChange = (e: any) => {
    setModal(!modal)

    if (modal) {
      setTitle('')
      setTempData([])
    }
  }

  const handleRemoveButton = (e: any) => {
    setTempData((prevData) => {
      let updateTempData = [...prevData]
      updateTempData = updateTempData.filter((title) => title != e.target.value)
      return updateTempData
    })
  }

  const handleForm = async (e: any) => {
    e.preventDefault()

    if (!tempData.includes(title)) {
      setLoading(true)
      setTempData(prevData => [...prevData, title])
      setLoading(false)
    }
  }

  const handleSaveButton = async (e: any) => {

    setLoading(true)

    try {
      await AddTodo(projectId, tempData)
      setModal(false)
      setTitle('')

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      <button className="btn btn-sm text-white btn-success" onClick={handleChange}>
        Add
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b-2 pb-2">Add Todo</h3>
          <form onSubmit={handleForm}>
            <div className="flex items-end justify-between">
              <div className="form-control">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  type="text"
                  name="title"
                  value={title}
                  required={true}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-sm w-full input-bordered"
                  placeholder="Baca buku"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-sm btn-success text-white">+</button>
              </div>
            </div>
          </form>

          <div>
            {tempData.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p>{item}</p>
                <button value={item} onClick={handleRemoveButton}>x</button>
              </div>
            ))}
          </div>

          <div className="modal-action">
            {!isLoading ? (
              <div>
                <button type="button" className="btn btn-sm me-1" onClick={handleChange}>
                  Cancel
                </button>
                <button type="submit" onClick={handleSaveButton} className="btn btn-sm btn-primary">
                  Save
                </button>
              </div>
            ) : (
              <button type="button" className="btn btn-sm loading">
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}