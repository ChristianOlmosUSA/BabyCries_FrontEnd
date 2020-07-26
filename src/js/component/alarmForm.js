import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

function myFunc(arg) {
	console.log(`arg was => ${arg}`);
}

export const AlarmForm = () => {
	const { store, actions } = useContext(Context);
	const [dbBaby, setDBBaby] = useState("DEFAULT");
	const [crying, setCrying] = useState("");
	const [dbLevel, setDBLevel] = useState(0);
	const [overheated, setOverheated] = useState("false");
	const [breathing, setBreathing] = useState(0);
	const [faceDown, setFaceDown] = useState("false");
	const [outOfCrib, setOutOfCrib] = useState("false");

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
							<input
								type="text"
								className="form-control"
								placeholder="Decible Level"
								value={dbLevel}
								onChange={e => {
									setDBLevel(e.target.value);
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
								<option value="true">Overheated - True</option>
								<option value="false">Overheated - False</option>
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
								placeholder="Breaths per minute"
								value={breathing}
								onChange={e => {
									setBreathing(e.target.value);
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
								value={faceDown}
								onChange={e => setFaceDown(e.target.value)}>
								<option value="true">Face Down - True</option>
								<option value="false">Face Down - False</option>
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
								<option value="true">Out Of Crib - True</option>
								<option value="false">Out Of Crib - False</option>
							</select>
						</div>
						<div className="form-group">
							<input
								type="button"
								value="Update"
								className="btn float-right login_btn"
								onClick={() => {
									actions.addAlarm(
										dbBaby,
										crying,
										dbLevel,
										overheated,
										breathing,
										faceDown,
										outOfCrib
									);
									/*console.log(
										"Clicked add",
										dbBaby,
										crying,
										dbLevel,
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
