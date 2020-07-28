import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Iframe from "react-iframe";

export const Video = () => (
	<div className="text-center backdrop">
		<h1>Live Video Here!</h1>
		<dir className="m-5">
			<Iframe
				src="https://e53a7278f764.ngrok.io/stream.mjpg"
				// url="https://www.youtube.com/embed?v=5ECD8J3dvDQ"
				width="640px"
				height="480px"
				id="Impossible_String_ID_kaybvkurycbucvehcbkewucxyrfewqxctv26427f6gx"
				className="theLiveVideo"
				display="initial"
				position="relative"
				allowFullScreen
			/>
		</dir>
	</div>
);
