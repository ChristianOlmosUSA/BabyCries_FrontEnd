import React, { useState } from "react";
import RPi_Logo from "../../img/RPi-Logo.png";
import TF_Logo from "../../img/TF-Logo.png";
import OpenCV_Logo from "../../img/OpenCV-Logo.png";
import MagicMonitor_Logo from "../../img/MagicMonitor-Logo.png";
import "../../styles/home.scss";

export const About = () => (
	<div className="text-center backdrop containter-fluid pb-4">
		<div className="p5 mx-auto flex-col">
			<div className="p-3">
				<div className="d-flex flex-wrap row">
					<div className="w-100 mx-auto m-2 h2 col flex-wrap">
						<p className="w-100">
							<img className="img-fluid" src={MagicMonitor_Logo} />
							<i> always there!</i>
						</p>
					</div>
				</div>
				<div className="mx-auto col flex-wrap">
					<p className="w-100">
						<img className="homeImage img-fluid" src={rigoImage} />
					</p>
				</div>
			</div>
		</div>

		<div className="p5 mx-auto flex-col p-2">
			<div className="bullets">Do you want to be alerted if you baby rolls onto their face?</div>
			<div className="bullets">How about a text message if they stop breathing?</div>
			<div className="bullets">And help with all the crying...</div>
			<div className="bullets">Why are they crying? Magic Monitor helps to guess</div>
		</div>

		<div className="p5 mt-3 flex-col">
			<div className="">
				<h2>How Magic Monitor Works</h2>
			</div>
			<div className="container homePageLogo">
				<div className="d-flex flex-row justify-content-around w-50 ml-3">
					<img className="img-fluid m-3" src={RPi_Logo} />
					<img className="img-fluid m-3" src={TF_Logo} />
					<img className="img-fluid m-3" src={OpenCV_Logo} />
				</div>
			</div>
			<div className="p5 mt-3">
				<div className="">Using artificial intelligence from Google</div>
				<div className="">Every breath is counted and timed</div>
				<div className="">her face position is checked every second</div>
				<div className="">and his every cry is compared to a database of 700 baby cries</div>
				<div className="">explained by reasons such as pain, hunger, diaper change, discomfort</div>
				<div className="">
					<small>* no images or sounds are stored by us, and you have complete control over the data</small>
				</div>
			</div>
		</div>
	</div>
);
