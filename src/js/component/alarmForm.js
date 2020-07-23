import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const AlarmForm = () => {
	const { store, actions } = useContext(Context);
	const [dbBaby, setDBBaby] = useState("DEFAULT");
	const [crying, setCrying] = useState("");
	const [overheated, setOverheated] = useState("False");
	const [breathing, setBreathing] = useState("True");
	const [faceDown, setFaceDown] = useState("False");
	const [outOfCrib, setOutOfCrib] = useState("False");

	return (
		<div className="d-flex justify-content-center h-auto container m-5 mx-auto">
			<div className="card h-auto">
				<div className="card-header">
					<h3>Add an Alarm here</h3>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<select className="custom-select" value={dbBaby} onChange={e => setDBBaby(e.target.value)}>
								<option value="DEFAULT">Select baby</option>
								{store.babies &&
									store.babies.map(item => {
										return (
											<option key={item.id} value={item.id}>
												id :{item.id} Name:
												{item.first_name} {item.last_name}
											</option>
										);
									})}
							</select>
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
								placeholder="Reason for Alarm"
								value={crying}
								onChange={e => {
									setCrying(e.target.value);
								}}
							/>
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<select
								className="custom-select"
								value={overheated}
								onChange={e => setOverheated(e.target.value)}>
								<option value="True">Overheated - True</option>
								<option value="False">Overheated - False</option>
							</select>
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<select
								className="custom-select"
								value={breathing}
								onChange={e => setBreathing(e.target.value)}>
								<option value="True">Breathing - True</option>
								<option value="False">Breathing - False</option>
							</select>
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<select
								className="custom-select"
								value={faceDown}
								onChange={e => setFaceDown(e.target.value)}>
								<option value="True">Face Down - True</option>
								<option value="False">Face Down - False</option>
							</select>
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<select
								className="custom-select"
								value={outOfCrib}
								onChange={e => setOutOfCrib(e.target.value)}>
								<option value="True">Out Of Crib - True</option>
								<option value="False">Out Of Crib - False</option>
							</select>
						</div>
						<div className="form-group">
							<input
								type="button"
								value="Update"
								className="btn float-right login_btn"
								onClick={() => {
									actions.addAlarm(dbBaby, crying, overheated, breathing, faceDown, outOfCrib);
									/*console.log(
										"Clicked add",
										dbBaby,
										crying,
										overheated,
										breathing,
										faceDown,
										outOfCrib
									);*/
									//setDBBaby("DEFAULT");
									//setCrying("");
									//setOverheated("DEFAULT");
									//setBreathing("DEFAULT");
									//setFaceDown("DEFAULT");
									//setOutOfCrib("DEFAULT");
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
