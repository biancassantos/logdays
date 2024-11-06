import { NavLink } from "react-router-dom";

const NavLinkWithText = ({ url, icon, text, btnRef }) => {
	return (
		<NavLink
			to={url}
			ref={btnRef}
			className="flex items-center gap-4 px-4 py-3 text-lg hover:bg-gray-300 transition-colors duration-300"
		>
			{icon} {text}
		</NavLink>
	);
};

export default NavLinkWithText;