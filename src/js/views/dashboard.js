import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { BabyForm } from "../component/babyForm";
import "../../styles/home.scss";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);
	const [babyState, setBabies] = useState("empty");

	useEffect(
		() => {
			actions.getUserData();
		},
		[babyState]
	);

	return (
		<div className="text-center">
			{store.token ? (
				<div className="d-flex flex-column bd-highlight mb-3">
					<div>User email = {store.user_info.email}</div>
					<div>User ID = {store.user_info.id}</div>
					<div>User active = {store.user_info.is_active ? "True" : "False"}</div>
					<div className="d-flex flex-column mx-auto">
						{store.babies &&
							store.babies.map((item, key) => {
								return (
									<div key={key} className="m-2 p-2 bd-highlight card">
										<div className="d-flex flex-row mx-auto">
											<div>
												{item.first_name} {item.last_name}
											</div>
										</div>
										<div className="card-body">
											<div>{item.id}</div>
											<div>{item.baby_gender}</div>
											<div>{item.dob_baby}</div>
											<div>{item.time_zone}</div>
											<div>{item.parent_id}</div>
											<div>{item.is_active ? "True" : "False"}</div>
											<div
												className="btn btn-danger"
												type="button"
												id={item.id}
												onClick={event => {
													actions.deleteBaby(item.id);
													//console.log(event.target.id);
													let tmp = store.babies.filter(baby => {
														return baby.id != event.target.id;
													});

													//Refresh using the state
													store.babies = tmp;
													console.log("store.babies = ", store.babies);
													setBabies(tmp);
												}}>
												Delete baby here
											</div>
										</div>
									</div>
								);
							})}
					</div>
					<BabyForm />
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</div>
	);
};
/*Dashboard.propTypes = {
	history: PropTypes.object
};*/
/*if ((store.token = null)) {
		history.push("/login");
	}*/
