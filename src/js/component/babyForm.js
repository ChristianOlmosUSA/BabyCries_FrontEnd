import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const BabyForm = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = React.useState(null);
	const [babyFirstName, setBabyFirstName] = useState("");
	const [babyLastName, setBabyLastName] = useState("");
	const [dob, setDOB] = useState("");
	const [timeZone, setTimeZone] = useState("");
	const [gender, setGender] = useState("DEFAULT");
	let userInfo = store.user_info;

	return (
		<div className="d-flex justify-content-center h-auto container m-5 mx-auto">
			<div className="card h-auto">
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
								value={babyFirstName}
								onChange={e => {
									setBabyFirstName(e.target.value);
								}}
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
								value={babyLastName}
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
								value={dob}
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
								value={timeZone}
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
							<select
								className="custom-select"
								id="gender2"
								value={gender}
								onChange={e => setGender(e.target.value)}>
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
									setBabyFirstName("");
									setBabyLastName("");
									setDOB("");
									setTimeZone("");
									setGender("DEFAULT");
									/*console.log(
										"CLog form babyForm",
										babyFirstName,
										babyLastName,
										dob,
										timeZone,
										gender
                                    );*/
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
