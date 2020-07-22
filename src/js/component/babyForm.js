import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const BabyForm = () => {
	const { actions, store } = useContext(Context);
	const [form, setForm] = React.useState(null);
	const [babyFirstName, setBabyFirstName] = useState(null);
	const [babyLastName, setBabyLastName] = useState(null);
	const [dob, setDOB] = useState(null);
	const [timeZone, setTimeZone] = useState(null);
	const [gender, setGender] = useState(null);
	let userInfo = store.user_info;

	return (
		<div className="d-flex justify-content-center h-100 container">
			<div className="card">
				<div className="card-header">
					<h3>Add a Baby here</h3>
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
								placeholder="baby's first name"
								onChange={e => setBabyFirstName(e.target.value)}
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
								placeholder="baby's last name"
								onChange={e => setBabyLastName(e.target.value)}
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
									{/*<i className="fas fa-key" />*/}
									<i className="fas fa-user" />
								</span>
							</div>
							<select className="custom-select" id="gender2" onChange={e => setGender(e.target.value)}>
								<option value="DEFAULT">Select gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div className="form-group">
							<input
								type="button"
								value="Update"
								className="btn float-right login_btn"
								onClick={() => {
									actions.addBaby(babyFirstName, babyLastName, dob, timeZone, gender);
									console.log(babyFirstName, babyLastName, dob, timeZone, gender);
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
