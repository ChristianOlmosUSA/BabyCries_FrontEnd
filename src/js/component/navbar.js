import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);
	const toggleUpOrDrop = () => setDropDown(!dropDown);
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
					PREVIOUS SLEEPS
				</Link>
				<Link className="nav-button" to="/login">
					LOGIN
				</Link>
			</div>
			<div
				type="button"
				className="btn btn-secondary Hamburger"
				onClick={() => {
					toggleUpOrDrop();
				}}>
				<i className="fa fa-bars " />
			</div>
			{dropDown ? (
				<div className="container-fluid Hamburger text-center">
					<Link className="nav-button w-100" to="./">
						HOME
					</Link>
					<Link className="nav-button w-100" to="/video">
						LIVE VIDEO
					</Link>
					<Link className="nav-button w-100" to="/dashboard">
						DASHBOARD
					</Link>
					<Link className="nav-button w-100" to="/historylist">
						HISTORY LIST
					</Link>
					<Link className="nav-button w-100" to="/login">
						LOGIN
					</Link>
				</div>
			) : (
				""
			)}
		</nav>
	);
};
