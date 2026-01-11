import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function Contacts() {
	const theme = useContext(ThemeContext)
	return (
		<div>
			<h1>Contacts</h1>
			<p>Current theme: {theme}</p>
		</div>
	);
}

export default Contacts;