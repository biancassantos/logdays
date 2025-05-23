import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/logsSlice";

const FavoriteBtn = ({ isFavorite, id }) => {
	const dispatch = useDispatch();
	const onClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(toggleFavorite(id));
	}

	return (
		<button
			type="button"
			onClick={e => onClick(e)}
			className="hover:bg-dark-gray transition-colors duration-300 p-1 rounded text-xl z-50"
		>
			{isFavorite === true ? <BsStarFill /> : <BsStar />}
		</button>
	);
};

export default FavoriteBtn;