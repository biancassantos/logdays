import { Link } from "react-router-dom";

const EditBtn = ({ id }) => {
	return (
		<Link to={`/logdays/all/${id}/edit`}>
			<button
				type="button"
				className="bg-accent hover:bg-white transition-colors duration-300 uppercase rounded px-4 py-1 text-sm"
			>
				edit
			</button>
		</Link>
	);
};

export default EditBtn;