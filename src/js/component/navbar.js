import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	const [dropDown, setDropDown] = useState(false);
	const toggleUpOrDrop = () => setDropDown(!dropDown);
	const [babyName, setBabyName] = useState("Magic Monitor");
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Disabled
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

{
	/*<nav className="navbar navbar-light bg-light w-100" onMouseLeave={() => setDropDown(false)}>
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
            </nav>*/
}
