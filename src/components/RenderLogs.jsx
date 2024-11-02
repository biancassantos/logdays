import LogPreview from "../components/LogPreview"
import { useSelector } from "react-redux"
import { useState } from "react"

const RenderLogs = ({ category }) => {
  const logs = useSelector(state => state.logs.logs)
  const logsSortedByDate = logs.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
  const favoritedLogs = logs.filter(log => log.isFavorite === true)

  const [search, setSearch] = useState('')
  const searchKeys = ["date", "title", "body"]

  let list = ''
  let message = ''

  if (category === 'all') {
    message = "No logs yet."
    list = logsSortedByDate
  } else if (category === 'favorites') {
    message = "No favorited logs yet."
    list = favoritedLogs
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <input 
      type="text" 
      placeholder="Search..."
      value={search}
      onChange={handleChange}
      className="px-4 py-[2px] rounded-lg border border-gray-detail font-roboto"
      ></input>

      {list.length === 0 && <p className="text-sm">{message}</p>}
      
      <div className='flex flex-col items-center gap-5 w-[100%]'>
        {list.filter(log => {
          return searchKeys.some(key => log[key].toLowerCase().includes(search.toLowerCase()))
        }).map(log => {
          return <LogPreview 
          key={log.id}
          id={log.id}
          date={log.date}
          title={log.title}
          body={log.body}
          isFavorite={log.isFavorite}
          />
        })}
      </div>
    </>
  )
}

export default RenderLogs