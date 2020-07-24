import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center backdrop">
		<div className="d-flex justify-content-between text-nowrap">
			<h1 className="p-5">
				<span className="para1">
					<h2>
						Magic Monitor, <i>always there!</i>
					</h2>
				</span>
				<div className="p5 mt-3">
					<div className="para1">Do you want to be alerted if you baby rolls onto their face?</div>
					<div className="para1">How about a text message if they stop breathing?</div>
					<div className="para1">And help with all the crying...</div>
					<div className="para1">Why are they crying? Magic Monitor helps to guess</div>
				</div>
			</h1>
			<p className="p-5">
				<img className="homeImage" src={rigoImage} />
			</p>
		</div>

		<span className="para2">
			<h2>How Magic Monitor Works</h2>
		</span>
		<div className="p5 mt-3">
			<div className="para2">Using artificial intelligence from Google</div>
			<div className="para2">Every breath is counted and timed</div>
			<div className="para2">her face position is checked every second</div>
			<div className="para2">and his every cry is compared to a database of 700 baby cries</div>
			<div className="para2">explained by reasons such as pain, hunger, diaper change, discomfort</div>
			<div className="para2">
				<small>* no images or sounds are stored by us, and you have complete control over the data</small>
			</div>
		</div>
	</div>
);
