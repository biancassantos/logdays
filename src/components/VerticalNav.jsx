import { BsJournalText, BsPlusLg, BsStarFill } from "react-icons/bs";
import useClickPage from "../hooks/useClickPage";
import NavLinkWithText from "./ui/NavLinkWithText";

const VerticalNav = () => {
	const allPageRef = useClickPage();

	return (
		<nav className="hidden md:flex md:flex-col md:gap-1">
			<NavLinkWithText
				url="/logdays/all"
				text="All"
				icon={<BsJournalText />}
				btnRef={allPageRef}
			/>
			<NavLinkWithText
				url="/logdays/new-log"
				text="New log"
				icon={<BsPlusLg />}
			/>
			<NavLinkWithText
				url="/logdays/favorites"
				text="Favorites"
				icon={<BsStarFill />}
			/>
		</nav>
	);
};

export default VerticalNav;