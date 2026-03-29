import { NavLink } from "react-router";

function AddUserButton() {
	return (
		<NavLink to="/users/new">
			+ Add user
		</NavLink>
	);
}

export default AddUserButton;