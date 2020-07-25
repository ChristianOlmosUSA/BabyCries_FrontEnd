import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import RPi_Logo from "../../img/RPi-Logo.png";
import TF_Logo from "../../img/TF-Logo.png";
import OpenCV_Logo from "../../img/OpenCV-Logo.png";
import MagicMonitor_Logo from "../../img/MagicMonitor-Logo.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center backdrop">
		<div className="d-flex mx-auto container-fluid">
			<div className="p-5">
				<div className="d-flex flex-wrap row containter">
					<div className="mx-auto m-2 h2 col-5 flex-wrap">
						<p>
							<img src={MagicMonitor_Logo} />
							<i> always there!</i>
						</p>
					</div>
				</div>
				<div className="mx-auto col-5 flex-wrap">
					<p className="">
						<img className="homeImage img-fluid" src={rigoImage} />
					</p>
				</div>
			</div>
		</div>
		<div className="container homePageLogo">
			<div className="d-flex flex-row justify-content-around w-100">
				<img className="img-fluid m-5" src={RPi_Logo} />
				<img className="img-fluid m-5" src={TF_Logo} />
				<img className="img-fluid m-5" src={OpenCV_Logo} />
			</div>
		</div>
		<div className="p5 mx-auto flex-col">
			<div className="">Do you want to be alerted if you baby rolls onto their face?</div>
			<div className="">How about a text message if they stop breathing?</div>
			<div className="">And help with all the crying...</div>
			<div className="">Why are they crying? Magic Monitor helps to guess</div>
		</div>
		<div className="p5 mt-3 flex-col">
			<div className="">
				<h2>How Magic Monitor Works</h2>
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
