import React from "react";
import VolumeChart from "../component/volumechart";
import FaceUp from "../component/faceup";
import EmotionChart from "../component/emotionchart";
import BreathsChart from "../component/breathschart";
import "../../styles/singleSleep.scss";

// API to import data from DB

export function SingleSleep() {
	let gender = "female";
	return (
		<div className={`${gender} container text-center mt`}>
			<div>
				<h3>Sleep Session from July 29th </h3>
			</div>

			<h3> Face up? </h3>
			<FaceUp />
			<h3> Cry type or asleep? </h3>
			<EmotionChart />
			<h3> Breaths per minute </h3>
			<BreathsChart />
			<h3> Baby volume </h3>
			<VolumeChart />
			<p>...</p>
		</div>
	);
}
