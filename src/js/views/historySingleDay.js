import React from "react";

import "../../styles/historySingleDay.scss";

export const HistorySingleDay = () => (
	<div className="text-center mt-5">
		<h1>Detailed Daily Data</h1>

		<div className="upOrDown inputFields" />
		<div className="cryPlotter inputFields" />
		<div className="sleepAwake inputFields" />
		<div className="volume inputFields" />
		<div className="breaths inputFields" />
	</div>
);
