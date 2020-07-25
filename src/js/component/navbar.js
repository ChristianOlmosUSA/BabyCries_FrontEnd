import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//const [dropDown, setDropDown] = useState(false);
	//const toggleUpOrDrop = () => setDropDown(!dropDown);
	const [babyName, setBabyName] = useState("Magic Monitor");

	return (
		<nav className="navbar navbar-light bg-light w-100">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{`${babyName}`}</span>
			</Link>
			<div className="ml-auto NBLinks">
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
			<a className="icon Hamburger">
				<i className="fa fa-bars " />
				<div className="pos-f-t">
					<div className="collapse" id="navbarToggleExternalContent">
						<div className="bg-dark p-4">
							<h5 className="text-white h4">Collapsed content</h5>
							<span className="text-muted">Toggleable via the navbar brand.</span>
						</div>
					</div>
					<nav className="navbar navbar-dark bg-dark">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarToggleExternalContent"
							aria-controls="navbarToggleExternalContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
					</nav>
				</div>
			</a>
		</nav>
	);
};
