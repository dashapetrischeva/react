import { Route, Routes } from "react-router";
import Page404 from "../views/Page404";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Contacts from "../views/Contacts";
import About from "@/views/About";


function AppRoutes() {
	const theme = 'light'
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;