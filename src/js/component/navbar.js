import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//const [dropDown, setDropDown] = useState(false);
	//const toggleUpOrDrop = () => setDropDown(!dropDown);
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">BabyName</span>
			</Link>
			<div className="ml-auto">
				<Link className="nav-button" to="./">
					HOME
				</Link>
				<Link className="nav-button" to="/video">
					LIVE VIDEO
				</Link>
				<Link className="nav-button" to="/dashboard">
					DASHBOARD
				</Link>
				<Link className="nav-button" to="/historylist">
					HISTORY LIST
				</Link>
				<Link className="nav-button" to="/login">
					LOGIN
				</Link>
			</div>
		</nav>
	);
};
