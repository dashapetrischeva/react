import { NavLink } from "react-router";

function AddPostButton() {
	return (
		<NavLink to="/posts/new">
			+ Add post
		</NavLink>
	);
}

export default AddPostButton;


