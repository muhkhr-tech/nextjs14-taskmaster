'use client'

import AddTodo from "@/app/todos/action/add"
import { useState } from "react"

export default function AddTodoButton({ itemTypes }: any) {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const handleChange = (e: any) => {
    setModal(!modal)

    if (modal) {
      setTitle('')
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

    try {
      await AddTodo(title)
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
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-sm w-full input-bordered"
                placeholder="Baca buku"
              />
            </div>

            <div className="modal-action">
              {!isLoading ? (
                <div>
                  <button type="button" className="btn btn-sm me-1" onClick={handleChange}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Save
                  </button>
                </div>
              ) : (
                <button type="button" className="btn btn-sm loading">
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}