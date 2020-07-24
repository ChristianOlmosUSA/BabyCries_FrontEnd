import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center backdrop">
		<div className="d-flex justify-content-between text-nowrap">
			<h1 className="p-5">
				<span className="p5 m5">Magic Monitor, always there!</span>
				<div className="p5 mt-3">
					<h5 className="p2">Do you want to be alerted if you baby rolls onto their face?</h5>
					<h5 className="p2">How about a text message if they stop breathing?</h5>
					<h5 className="p2">And help with all the crying...</h5>
					<h5 className="p2">Why are they crying? Magic Monitor helps to guess</h5>
					<h5 className="p2" />
					<h5 className="p2" />
					<h5 className="p2" />
					<h5 className="p2" />
				</div>
			</h1>
			<p className="p-5">
				<img className="shadow-lg" src={rigoImage} />
			</p>
		</div>

		<span className="p5 m5">How Magic Monitor Works</span>
		<div className="p5 mt-3">
			<h5 className="p2">Using Googles artificial intelligence</h5>
			<h5 className="p2">Every breath is counted and timed</h5>
			<h5 className="p2">face position is checked every second</h5>
			<h5 className="p2">and every cry is compared to a database of 700 baby cries</h5>
			<h5 className="p2">explained by reason: pain, hunger, diaper change, discomfort</h5>
		</div>
	</div>
);
