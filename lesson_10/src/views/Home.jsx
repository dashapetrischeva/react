import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function Home() {
	const theme = useContext(ThemeContext)
	return (
		<div>
			<h1>Home</h1>
			<p>Current theme: {theme}</p>

		</div>
	);
}

export default Home;