import React from "react";

import "../../styles/historyList.scss";
/* THIS IS REALLY A DRAFT OF A DRAFT! dont want a class, need to loop through props for all history */

export const HistoryList = () => {
	return (
		<div className="text-center container bg-white text-center">
			<div>History List</div>
			<div type="button" className="history-entry">
				Entry 3-7-89
			</div>
			<div type="button" className="history-entry">
				Entry 3-7-89
			</div>
			<div type="button" className="history-entry">
				Entry 3-7-89
			</div>
			<div type="button" className="history-entry">
				Entry 3-7-89
			</div>
			<div type="button" className="history-entry">
				Entry 3-7-89
			</div>
		</div>
	);
};
