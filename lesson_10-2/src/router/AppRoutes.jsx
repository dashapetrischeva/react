import { Route, Routes } from "react-router";
import Page404 from "../views/Page404";
import Layout from "../components/Layout";
import Buses from "@/views/Buses";
import Hotels from "../views/Hotels";
import Results from "../views/Results";


function AppRoutes() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Buses />} />
				<Route path="/hotels" element={<Hotels />} />
				<Route path="/results" element={<Results />} />
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;