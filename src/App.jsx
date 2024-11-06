import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllLogsPage from "./pages/AllLogsPage";
import EditLogPage from "./pages/EditLogPage";
import FavoriteLogsPage from "./pages/FavoriteLogsPage";
import FullLogPage from "./pages/FullLogPage";
import MainLayout from "./pages/MainLayout";
import NewLogPage from "./pages/NewLogPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/logdays" element={<MainLayout />}>
					<Route path="/logdays/all" element={<AllLogsPage />} />
					<Route path="/logdays/all/:id" element={<FullLogPage />} />
					<Route path="/logdays/all/:id/edit" element={<EditLogPage />} />
					<Route path="/logdays/new-log" element={<NewLogPage />} />
					<Route path="/logdays/favorites" element={<FavoriteLogsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;