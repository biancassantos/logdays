import { useNavigate, useParams } from "react-router-dom";
import EditLogForm from "../components/EditLogForm";

const EditLogPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	return (
		<section className="flex flex-col items-center gap-6 py-7 px-5 w-[100%] overflow-y-scroll">
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="self-start text-md p-2 rounded hover:bg-dark-gray transition-colors duration-300"
			>
				Cancel
			</button>
			<EditLogForm id={id} />
		</section>
	);
};

export default EditLogPage;