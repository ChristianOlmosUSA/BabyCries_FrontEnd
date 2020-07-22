import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import moment from "moment";
import "../../styles/historyList.scss";
/* THIS IS REALLY A DRAFT OF A DRAFT! dont want a class, need to loop through props for all history */
let entries = [];

export const HistoryList = () => {
	const { actions, store } = useContext(Context);
	const [endDate, setEndDate] = useState(moment().subtract(7, "day"));
	const [someData, setSomeData] = useState(null);

	useEffect(() => {
		let current = moment();

		while (endDate.isBefore(current)) {
			entries.push(moment(current));
			current = moment(current).subtract(1, "day");
		}
		console.log("entries " + entries);
		setSomeData({ data: entries });
	}, []);

	return (
		<div className="text-center container bg-white text-center">
			{someData ? console.dir(someData) : "loading..."}
			<div
				type="button"
				className="history-entry"
				onClick={() => setEndDate(moment(endDate).subtract(7, "days"))}>
				mode days
			</div>
		</div>
	);
};
