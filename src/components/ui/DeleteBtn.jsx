import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLog } from "../../store/logsSlice";

const DeleteBtn = ({ id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleDelete() {
		dispatch(deleteLog(id));
		navigate("/logdays/all");
	}

	return (
		<button
			type="button"
			onClick={handleDelete}
			className="hover:bg-dark-gray transition-colors duration-300 p-1 rounded text-xl"
		>
			<BsTrash />
		</button>
	);
};

export default DeleteBtn;