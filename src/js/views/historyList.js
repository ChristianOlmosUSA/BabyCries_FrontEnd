import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import moment from "moment";
import "../../styles/historyList.scss";
/*...TO DO:  onClick we need to request the data for said day and open it in historySingleDay  */
let entries = [];

export const HistoryList = () => {
	const { actions, store } = useContext(Context);
	const [endDate, setEndDate] = useState(moment().subtract(7, "day"));
	const [days, setDays] = useState([]);

	useEffect(
		() => {
			let current = moment();

			while (endDate.isBefore(current)) {
				entries.push(moment(current));
				current = moment(current).subtract(1, "day");
			}

			setDays(entries);
		},
		[endDate]
	);

	return (
		<div className="text-center container bg-white text-center">
			{days.map(e => {
				return (
					<div key={e} className="history-entry">
						{e.format("D MMM YYYY")}
					</div>
				);
			})}
			<div
				type="button"
				className="history-entry"
				onClick={() => setEndDate(moment(endDate).subtract(7, "days"))}>
				more days
			</div>
		</div>
	);
};
