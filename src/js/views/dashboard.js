import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import "../../styles/home.scss";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getUserData();
	}, []);

	//alert(store.token);
	//store.token = "fake";
	return (
		<div className="text-center mt-5 container-fluid">
			{store.token ? (
				<div className="row">
					<div className="col">History</div>
					<div className="col">Some Chart</div>
					<div className="col">Some Chart</div>
					<div className="col">Some Chart</div>
				</div>
			) : (
				<Redirect to="/login" />
			)}
		</div>
	);
};
Dashboard.propTypes = {
	history: PropTypes.object
};
/*if ((store.token = null)) {
		history.push("/login");
	}*/
