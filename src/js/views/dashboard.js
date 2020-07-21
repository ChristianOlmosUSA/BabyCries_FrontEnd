import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { BabyForm } from "../component/babyForm";
import "../../styles/home.scss";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getUserData();
	}, []);
	//alert(store.token);
	//store.token = "fake";
	return (
		<div className="text-center">
			{store.token ? (
				<div className="d-flex flex-column bd-highlight mb-3">
					{store.user_info
						? Object.keys(store.user_info).map((item, key) => {
								return (
									<div key={key} className="p-2 bd-highlight">
										{item} :
										{Array.isArray(store.user_info[item])
											? "Empty"
											: item == "is_active"
												? store.user_info
													? "true"
													: "false"
												: store.user_info[item]}
									</div>
								);
						  })
						: console.log("User_info is empty")}
					<BabyForm />
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
