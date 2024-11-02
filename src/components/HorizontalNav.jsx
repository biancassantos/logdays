import NavLinkWithoutText from "./ui/NavLinkWithoutText"
import { BsJournalText, BsPlusLg, BsStarFill } from "react-icons/bs"
import useClickPage from "../hooks/useClickPage"

const HorizontalNav = () => {
  const allPageRef = useClickPage()

  return (
    <nav className="flex justify-around md:hidden">
      <NavLinkWithoutText url='/all' icon={<BsJournalText />} btnRef={allPageRef} />
      <NavLinkWithoutText url='/new-log' icon={<BsPlusLg />} />
      <NavLinkWithoutText url='/favorites' icon={<BsStarFill />} />
    </nav>
  )
}

export default HorizontalNav