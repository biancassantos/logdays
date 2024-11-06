import { useSelector } from "react-redux";
import DeleteBtn from "./ui/DeleteBtn";
import EditBtn from "./ui/EditBtn";
import FavoriteBtn from "./ui/FavoriteBtn";
import WhiteContainer from "./ui/WhiteContainer";

const FullLog = ({ id }) => {
	const logs = useSelector((state) => state.logs.logs);
	const selectedLog = logs.find((log) => log.id === id);

	return (
		<WhiteContainer>
			<div className="flex justify-between items-center mb-6">
				<FavoriteBtn isFavorite={selectedLog.isFavorite} id={id} />
				<span className="text-sm text-gray-400">{selectedLog.date}</span>
			</div>
			<h3 className="font-semibold text-lg mb-2">{selectedLog.title}</h3>
			<p className="font-handwritten text-xl mb-6">{selectedLog.body}</p>
			<div className="flex justify-end gap-2">
				<DeleteBtn id={id} />
				<EditBtn id={id} />
			</div>
		</WhiteContainer>
	);
};

export default FullLog;