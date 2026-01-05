import { Route, Routes } from "react-router";
import Page404 from "../views/Page404";
import Layout from "../components/Layout";
import Home from "../views/Home";
import ProductDetail from "../views/products/ProductDetail";
import Shop from "../views/products/Shop";
import Contacts from "../views/Contacts";
import PaymentRules from "../views/PaymentRules";

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/payment" element={<PaymentRules />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;