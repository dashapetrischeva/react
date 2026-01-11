import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function About() {
	const theme = useContext(ThemeContext)
	return (
		<div>
			<h1>About</h1>
			<p>Current theme: {theme}</p>

		</div>
	);
}

export default About;