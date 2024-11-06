import { useState } from "react";
import { BsCheck2, BsPencil } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../store/userSlice";

const NavHeader = () => {
	const { username } = useSelector((state) => state.username);
	const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [newUsername, setNewUsername] = useState(username);

	function handleClick() {
		setIsEditing(!isEditing);
		dispatch(updateUsername(newUsername.trim()));
	}

	function handleChange(e) {
		setNewUsername(e.target.value);
	}

	return (
		<div className="flex justify-between items-start px-5 py-3 md:mb-4">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-normal">Hello,</h1>
				{isEditing ? (
					<input
						type="text"
						value={newUsername}
						onChange={handleChange}
						className="max-w-[150px] border border-gray-detail rounded-lg px-2 py-1"
					/>
				) : (
					<span className="text-3xl font-handwritten">{username}</span>
				)}
			</div>
			<button
				type="button"
				onClick={handleClick}
				className="p-2 rounded hover:bg-dark-gray transition-colors duration-300"
			>
				{isEditing ? <BsCheck2 /> : <BsPencil />}
			</button>
		</div>
	);
};

export default NavHeader;