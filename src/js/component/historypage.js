import React from "react";
import VolumeChart from "./volumechart";
import FaceUp from "./faceup";
import EmotionChart from "./emotionchart";
import BreathsChart from "./breathschart";

//create your first component
export function HistoryPage() {
	let gender = "female";
	return (
		<div className={`${gender} container text-center mt`}>
			<div>
				<h2>Past Monitor from July 17th </h2>
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
