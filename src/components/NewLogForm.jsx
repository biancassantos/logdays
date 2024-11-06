import { useState } from "react"
import WhiteContainer from "./ui/WhiteContainer"
import { useDispatch } from "react-redux"
import { addLog } from "../store/logsSlice"
import { useNavigate } from "react-router-dom"

const NewLogForm = () => {
  const todaysDate = new Date()
  const [date, setDate] = useState(todaysDate.toISOString().split('T')[0])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [bodyError, setBodyError] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const newLog = {
    date,
    title,
    body
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addLog(newLog))
    navigate('/logdays/all')
  }

  return (
    <WhiteContainer>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="date" className='text-sm font-medium'>
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
          <label htmlFor="title"className='text-sm font-medium'>
            Title
          </label>
          <input 
          type="text" 
          name="title" 
          id="title"
          value={title}
          required
          onBlur={() => title === '' ? setTitleError(true) : setTitleError(false)}
          onChange={e => setTitle(e.target.value)}
          className="border border-gray-detail rounded-lg px-2 py-1" />
          {titleError && <p className='text-sm text-red-600'>The log must have a title</p>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="body" className='text-sm font-medium'>
            Body
          </label>
          <textarea 
          name="body" 
          id="body"
          value={body}
          required
          onBlur={() => body === '' ? setBodyError(true) : setBodyError(false)}
          onChange={e => setBody(e.target.value)}
          className="border border-gray-detail rounded-lg px-2 py-1 h-[250px] resize-none md:h-[300px]"></textarea>
          {bodyError && <p className='text-sm text-red-600'>The log must have a body</p>}
        </div>
        <button 
        type="submit"
        className='bg-accent hover:bg-white transition-colors duration-300 uppercase font-roboto rounded px-4 py-1 text-sm self-center'>
          add log
        </button>
      </form>
    </WhiteContainer>
  )
}

export default NewLogForm