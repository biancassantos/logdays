import NavHeader from "./ui/NavHeader"
import VerticalNav from "./VerticalNav"
import HorizontalNav from "./HorizontalNav"

const Navbar = () => {
  return (
    <section className="flex flex-col justify-between gap-6 pt-6 border-b border-gray-detail md:justify-start md:border-r md:border-b-0 md:w-[250px]">
      <NavHeader />
      <HorizontalNav />
      <VerticalNav />
    </section>
  )
}

export default Navbar