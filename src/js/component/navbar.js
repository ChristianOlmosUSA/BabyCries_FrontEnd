import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);
	const toggleUpOrDrop = () => setDropDown(!dropDown);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">BabyName</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary" onClick={toggleUpOrDrop}>
					Menu
				</button>
				{dropDown ? (
					<div className="d-flex flex-column h-100">
						<button>Live Video</button>
						<button>Settings</button>
						<button>History</button>
					</div>
				) : null}
			</div>
		</nav>
	);
};
