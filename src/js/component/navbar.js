import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	const [dropDown, setDropDown] = useState(false);
	const toggleUpOrDrop = () => setDropDown(!dropDown);
	const [babyName, setBabyName] = useState("Magic Monitor");
	return (
		<nav className="navbar navbar-light bg-light w-100" onMouseLeave={() => setDropDown(false)}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{`${babyName}`}</span>
			</Link>
			<div className="ml-auto NBLinks">
				<Link className="nav-button" to="./">
					HOME
				</Link>
                <Link className="nav-button" to="/about">
					ABOUT US
				</Link>
				{store.token ? (
					<span>
						<Link className="nav-button" to="/video">
							LIVE VIDEO
						</Link>
						<Link className="nav-button" to="/dashboard">
							DASHBOARD
						</Link>
						<Link className="nav-button" to="/historylist">
							PREVIOUS SLEEPS
						</Link>
					</span>
				) : (
					""
				)}
				{store.token ? (
					<Link className="nav-button" to="/login">
						LOG OUT - NOT IMPLEMENTED
					</Link>
				) : (
					<Link className="nav-button" to="/login">
						LOGIN
					</Link>
				)}
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
                    <Link className="nav-button" to="/about">
					    ABOUT US
				    </Link>
					{store.token ? (
					<span>
						<Link className="nav-button" to="/video">
							LIVE VIDEO
						</Link>
						<Link className="nav-button" to="/dashboard">
							DASHBOARD
						</Link>
						<Link className="nav-button" to="/historylist">
							PREVIOUS SLEEPS
						</Link>
					</span>
				) : (
					""
				)}
					{store.token ? (
					<Link className="nav-button" to="/login">
						LOG OUT - NOT IMPLEMENTED
					</Link>
				) : (
					<Link className="nav-button" to="/login">
						LOGIN
					</Link>
				)}
				</div>
			) : (
				""
			)}
		</nav>
	);
};
