import { Link } from "react-router-dom"
import WhiteContainer from "./ui/WhiteContainer"
import FavoriteBtn from "./ui/FavoriteBtn"

const LogPreview = ({ id, date, title, body, isFavorite }) => {
  return (
    <Link 
    to={`/logdays/all/${id}`} 
    className="hover:shadow-md transition-shadow duration-300 max-w-[700px] w-[100%]">
      <WhiteContainer>
        <div className='flex justify-between items-center mb-6'>
          <FavoriteBtn isFavorite={isFavorite} id={id} />
          <span className='text-sm text-gray-400 text-end'>
            {date}
          </span>
        </div>
        <h3 className='font-semibold text-lg mb-2'>
          {title}
        </h3>
        <p className='font-handwritten text-xl mb-6'>
          {body.length > 140 ? `${body.substring(0, 140)}..` : body}
        </p>
      </WhiteContainer>
    </Link>
  )
}

export default LogPreview