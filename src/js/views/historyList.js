import React from "react";
//import moment from "moment";
import "../../styles/historyList.scss";
/* THIS IS REALLY A DRAFT OF A DRAFT! dont want a class, need to loop through props for all history */

export const HistoryList = () => {
	{
		/*const [endDate, setEndDate] = React.useState(moment().subtract(7, "day"));
	let current = moment();

	let entries = [];
	while (endDate.isBefore(current)) {
		entries.push(moment(current));
		current = moment(current).subtract(1, "day");
	}
	console.log(entries);
*/
	}
	return (
		<div className="text-center container bg-white text-center">
			<div>History List</div>
			{entries.map((e, i) => {
				return (
					<div key={i} type="button" className="history-entry">
						{e.format("Do MMM, YYYY")}
					</div>
				);
			})}
			<div
				type="button"
				className="history-entry"
				onClick={() => setEndDate(moment(endDate).subtract(7, "days"))}>
				mode days
			</div>
		</div>
	);
};
