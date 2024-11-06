import { BsJournalText, BsPlusLg, BsStarFill } from "react-icons/bs";
import useClickPage from "../hooks/useClickPage";
import NavLinkWithoutText from "./ui/NavLinkWithoutText";

const HorizontalNav = () => {
	const allPageRef = useClickPage();

	return (
		<nav className="flex justify-around md:hidden">
			<NavLinkWithoutText
				url="/logdays/all"
				icon={<BsJournalText />}
				btnRef={allPageRef}
			/>
			<NavLinkWithoutText url="/logdays/new-log" icon={<BsPlusLg />} />
			<NavLinkWithoutText url="/logdays/favorites" icon={<BsStarFill />} />
		</nav>
	);
};

export default HorizontalNav;