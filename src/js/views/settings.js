import React from "react";

import "../../styles/home.scss";

export const Settings = () => (
	<div className="text-center mt-5">
		<h1>Settings</h1>

		<div className="babyName inputFields">
			<input type="text" name="name" placeholder="name" />
		</div>
		<div className="dateOfBirth inputFields">
			<input type="text" name="name" placeholder="baby birth date" />
		</div>
		<div className="timeZone inputFields">
			<input type="text" name="name" placeholder="your local timezone" />
		</div>
		<div className="gender inputFields">
			<input type="text" name="name" placeholder="baby's gender" />
		</div>

		<a href="#" className="btn btn-success">
			Update
		</a>
	</div>
);
