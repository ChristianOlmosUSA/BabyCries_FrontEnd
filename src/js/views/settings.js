import React from "react";

import "../../styles/home.scss";

export const Settings = () => (
	<div className="text-center mt-5">
		<h1>Settings</h1>

		<div className="babyName inputFields">
			<input type="text" name="name" placeholder="name" />
		</div>
		<div className="dateOfBirth inputFields">
			<input type="text" name="name" />
		</div>
		<div className="timeZone inputFields">
			<input type="text" name="name" />
		</div>
		<div className="gender inputFields">
			<input type="text" name="name" />
		</div>

		<a href="#" className="btn btn-success">
			Update
		</a>
	</div>
);
