import { NavLink } from "react-router-dom";

const NavLinkWithoutText = ({ url, icon, btnRef }) => {
	return (
		<NavLink
			to={url}
			ref={btnRef}
			className="flex justify-center py-3 w-[100%] text-xl hover:bg-gray-300 active:bg-accent transition-colors duration-300"
		>
			{icon}
		</NavLink>
	);
};

export default NavLinkWithoutText;