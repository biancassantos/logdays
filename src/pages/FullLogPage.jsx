import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import FullLog from "../components/FullLog";

const FullLogPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<section className="flex flex-col items-center gap-6 py-7 px-5 w-[100%] overflow-y-scroll">
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="self-start text-xl p-2 rounded hover:bg-dark-gray transition-colors duration-300"
			>
				<BsArrowLeft />
			</button>
			<FullLog id={id} />
		</section>
	);
};

export default FullLogPage;