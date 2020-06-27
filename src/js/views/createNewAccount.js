import React from "react";

import "../../styles/createNewAccount.scss";

export const CreateNewAccount = () => (
	<div className="text-center mt-5">
		<h1>Create New Account</h1>

		<div className="userName inputFields">
			<input type="text" name="userName" placeholder="user name" />
		</div>
		<div className="password inputFields">
			<input type="text" name="password" placeholder="password" />
		</div>
		<div className="passwordConfirm inputFields">
			<input type="text" name="passwordConfirm" placeholder="confirm password" />
		</div>
		<div className="cameraIDnumber inputFields">
			<input type="text" name="cameraIDnumber" placeholder="Camera ID number" />
		</div>

		<a href="#" className="btn btn-success">
			Get Started
		</a>
	</div>
);
