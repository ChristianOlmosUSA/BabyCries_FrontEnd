import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import RPi_Logo from "../../img/RPi-Logo.png";
import TF_Logo from "../../img/TF-Logo.png";
import OpenCV_Logo from "../../img/OpenCV-Logo.png";
import MagicMonitor_Logo from "../../img/MagicMonitor-Logo.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center backdrop containter-fluid pb-4">
		<div className="mx-auto flex-col">
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
		<div className="mx-auto flex-col p-2">
			<h1>
				Know Your Baby&#39;s Wants and Needs at{" "}
				<u>
					<i>ANY</i>
				</u>{" "}
				Time
				<i>!</i>
			</h1>
		</div>
		<div className="mx-auto flex-col p-2">
			<div className="bullets">Do you want to be alerted if you baby rolls onto their face?</div>
			<div className="bullets">How about a text message if they stop breathing?</div>
			<div className="bullets">And help with all the crying...</div>
			<div className="bullets">Why are they crying? Magic Monitor helps to guess</div>
		</div>

		<div className="mt-3 flex-col homeImage">
			<div className="">
				<h2>How Magic Monitor Works</h2>
			</div>
			<div className="mt-3">
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
		<div className="p-1 mt-3 flex-col container-fluid">
			<div className="container-wrap d-inline-flex">
				<h2 className="">
					Magic Monitor: <i>The Product</i>
				</h2>
			</div>
			<div className="m-2 mt-3">
				<div className="m-2 container-fluid  d-inline-flex">
					Magic Monitor offers 3 new distinct functions no other baby monitor offers – especially from camera
					only product.​
				</div>
				<div className="card-group container-fluid p-0">
					<div className="container p-0" style={{ maxWidth: "20rem" }}>
						<i className="fas fa-video fa-4x" />
						<div className="card-body">
							<p className="card-text">
								Detects whether the baby is face up or face down. Most international guidelines suggest
								young babies are kept face up​ to prevent SIDS.
							</p>
						</div>
					</div>
					<div className="container p-0" style={{ maxWidth: "20rem" }}>
						<i className="fas fa-microphone-alt fa-4x" />
						<div className="card-body">
							<p className="card-text">
								Identifies the breathing rate of the baby and notifies you if your baby has very rapid
								or slow breathing
							</p>
						</div>
					</div>
					<div className="container p-0" style={{ maxWidth: "20rem" }}>
						<i className="fas fa-search fa-4x" />
						<div className="card-body">
							<p className="card-text">
								Cry Interpretation. Using an opensource database of 715 cries which have been
								categorized, we can also respond to the noise of crying whether it is ‘hunger’,
								‘sleepiness’, ’boredom’, ’colicky’, ’sick’, or ’has had enough’ ​​
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				The great thing about our alert system is users can recieve text message notifications and updates about
				their child.
			</div>
			<div className="container-fluid">
				As with any standard baby monitor there is a live streaming video page. The security of this is
				important – each monitor would arrive with a unique 32 digit key used for the first sign-up linking to a
				unique subdomain, on top of the JWT secure login. No video is saved (But a future option might be a
				play-back)
			</div>
		</div>
	</div>
);
