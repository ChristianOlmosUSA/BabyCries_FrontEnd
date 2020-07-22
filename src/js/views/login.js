import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/CustomLogin.scss";
import { Context } from "../store/appContext";
import { Dashboard } from "./dashboard";
import PropTypes from "prop-types";
var LoginBG = require("../../img/LoginBG.jpg");

export const Login = ({ history }) => {
	const { actions, store } = useContext(Context);
	const [password, setPassword] = React.useState("");
	const [email, setEmail] = React.useState("");

	const formHandler = () => {
		//alert(event);
		//alert("email " + email + " password " + password);
		actions.getToken(email, password);
		//actions.getUserData();
	};

	return (
		<div className="background-image h-100 w-100">
			{store.token ? (
				<Redirect to="/dashboard" />
			) : (
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Sign In</h3>
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-user" />
										</span>
									</div>
									<input
										type="text"
										className="form-control"
										placeholder="username"
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-key" />
										</span>
									</div>
									<input
										type="password"
										className="form-control"
										placeholder="password"
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" />
									Remember Me
								</div>
								<div className="form-group">
									<input
										type="button"
										value="Login"
										className="btn float-right login_btn"
										onClick={() => formHandler()}
									/>
								</div>
							</form>
						</div>

						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								Don&#39;t have an account?
								<a href="../createNewAccount">Create a new account</a>
							</div>
							<div className="d-flex justify-content-center">
								<a href="#">Forgot your password?</a>
							</div>
							{/*	            do we really want social media icons on a secure login page for a baby!! I've commented out.
					<div className="d-flex justify-content-end social_icon">
					<span>
							<i className="fab fa-facebook-square" />
						</span>
						<span>
							<i className="fab fa-google-plus-square" />
						</span>
						<span>
							<i className="fab fa-twitter-square" />
						</span> 
					</div>*/}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
Login.propTypes = {
	history: PropTypes.object
};
