import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";

const MainLayout = () => {
	return (
		<main className="h-screen bg-dark-gray p-6 flex justify-center items-center">
			<Container>
				<Navbar />
				<Outlet />
			</Container>
		</main>
	);
};

export default MainLayout;