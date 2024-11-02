import NavLinkWithText from "./ui/NavLinkWithText"
import { BsJournalText, BsPlusLg, BsStarFill } from "react-icons/bs"
import useClickPage from "../hooks/useClickPage"

const VerticalNav = () => {
  const allPageRef = useClickPage()

  return (
    <nav className="hidden md:flex md:flex-col md:gap-1">
      <NavLinkWithText url="/all" text="All" icon={<BsJournalText />} btnRef={allPageRef} />
      <NavLinkWithText url="/new-log" text="New log" icon={<BsPlusLg />} />
      <NavLinkWithText url="favorites" text="Favorites" icon={<BsStarFill />} />
    </nav>
  )
}

export default VerticalNav