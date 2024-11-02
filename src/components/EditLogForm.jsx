import { useState } from "react"
import WhiteContainer from "./ui/WhiteContainer"
import { useSelector, useDispatch } from "react-redux"
import { editLog } from "../store/logsSlice"
import { useNavigate } from "react-router-dom"

const EditLogForm = ({ id }) => {
  const logs = useSelector(state => state.logs.logs)
  const selectedLog = logs.find(log => log.id === id)

  const [date, setDate] = useState(selectedLog.date)
  const [title, setTitle] = useState(selectedLog.title)
  const [body, setBody] = useState(selectedLog.body)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const editedLog = {
    id,
    date,
    title,
    body
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(editLog(editedLog))
    navigate(-1)
  }

  return (
    <WhiteContainer>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label 
          htmlFor="date" 
          className='text-sm font-medium'>
            Date
          </label>
          <input 
          type="date" 
          name="date" 
          id="date" 
          value={date}
          onChange={e => setDate(e.target.value)}
          className="border border-gray-detail rounded-lg px-2 py-1"/>
        </div>
        <div className='flex flex-col gap-1'>
          <label 
          htmlFor="title"
          className='text-sm font-medium'>
            Title
          </label>
          <input 
          type="text" 
          name="title" 
          id="title"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border border-gray-detail rounded-lg px-2 py-1" />
        </div>
        <div className='flex flex-col gap-1'>
          <label 
          htmlFor="body"
          className='text-sm font-medium'>
            Body
          </label>
          <textarea 
          name="body" 
          id="body"
          required
          value={body}
          onChange={e => setBody(e.target.value)}
          className="border border-gray-detail rounded-lg px-2 py-1 h-[250px] resize-none md:h-[300px]"></textarea>
        </div>
        <button 
        type="submit"
        className='bg-accent hover:bg-white transition-colors duration-300 uppercase font-roboto rounded px-4 py-1 text-sm self-center'>
          apply changes
        </button>
      </form>
    </WhiteContainer>
  )
}

export default EditLogForm