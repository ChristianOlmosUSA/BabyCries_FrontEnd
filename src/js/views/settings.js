import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/CustomLogin.scss";
var LoginBG = require("../../img/LoginBG.jpg");

export const Settings = () => {
	const { actions, store } = useContext(Context);
	const [form, setForm] = React.useState(null);
	const [babyName, setBabyName] = useState(null);
	const [dob, setDOB] = useState(null);
	const [timeZone, setTimeZone] = useState(null);
	const [gender, setGender] = useState(null);

	return (
		<div className="background-image h-100 w-100">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Settings</h3>
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
									placeholder="baby name"
									onChange={e => setBabyName(e.target.value)}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="date of birth"
									onChange={e => setDOB(e.target.value)}
								/>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="time zone"
									onChange={e => setTimeZone(e.target.value)}
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
									placeholder="gender"
									onChange={e => setGender(e.target.value)}
								/>
							</div>
							{/* <div className="row align-items-center remember">
							<input type="checkbox" />
							Remember Me
						</div> */}
							<div className="form-group">
								<input
									type="button"
									value="Update"
									className="btn float-right login_btn"
									onClick={() => {
										actions.updateSettings(babyName, dob, timeZone, gender);
									}}
								/>
							</div>
						</form>
					</div>

					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							no text here
							<a href="#">no text here</a>
						</div>
						<div className="d-flex justify-content-center">
							<a href="#">no text here</a>
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
		</div>
	);
};
