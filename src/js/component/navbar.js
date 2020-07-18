import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//const [dropDown, setDropDown] = useState(false);
	//const toggleUpOrDrop = () => setDropDown(!dropDown);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">BabyName</span>
			</Link>
			<div className="ml-auto">
				<Link className="nav-button" to="./">
					HOME
				</Link>
				<Link className="nav-button" to="/livevideo">
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
