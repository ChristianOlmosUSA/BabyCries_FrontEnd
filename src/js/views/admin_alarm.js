import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { BabyForm } from "../component/babyForm";
import { AlarmForm } from "../component/alarmForm";
import moment from "moment";
import "../../styles/home.scss";

let timeLeft;
const calculateTimeLeft = () => {
	let year = new Date().getFullYear();
	let difference = +new Date(`${year}-10-1`) - +new Date();

	timeLeft = timeLeft + 1;

	return timeLeft;
};

export const AdminAlarm = () => {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setIsActive(false);
	}

	useEffect(
		() => {
			let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					setSeconds(seconds => seconds + 1);
					console.log("1 sec");
				}, 1000);
			} else if (!isActive && seconds !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[isActive, seconds]
	);

	return (
		<div className="app">
			<div className="time">{seconds}s</div>
			<div className="row">
				<button
					className={`button button-primary button-primary-${isActive ? "active" : "inactive"}`}
					onClick={toggle}>
					{isActive ? "Pause" : "Start"}
				</button>
				<button className="button" onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
};
/*Dashboard.propTypes = {
	history: PropTypes.object
};*/
/*if ((store.token = null)) {
		history.push("/login");
	}*/
