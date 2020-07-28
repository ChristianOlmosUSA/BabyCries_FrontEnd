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
		<div className="p-3 mt-3 flex-col container-fluid">
			<div className="">
				<h2>
					Magic Monitor: <i>The Product</i>
				</h2>
			</div>
			<div className="p-3 m-5 mt-3">
				<div className="m-2">
					Magic Monitor offers 3 new distinct functions no other baby monitor offers – especially from camera
					only product.​
				</div>
				<div className="m-3 px-4 py-2 container-fluid">
					<div className="row">
						<span className="m-1 p-1 card col">
							<i className="fas fa-video fa-4x" />
							Detects whether the baby is face up or face down. Most international guidelines suggest
							young babies are kept face up​ to prevent SIDS.
						</span>
						<span className="m-1 p-1 card col">
							<i className="fas fa-microphone-alt fa-4x" />
							Identifies the breathing rate of the baby. The user gets default variables, and can also
							adjust these or disable the alert. But the great thing about these two functions is getting
							an alert to your phone by text message telling you if your baby has very rapid or slow
							breathing or has rolled onto their face​
						</span>
						<span className="m-1 p-1 card col">
							<i className="fas fa-search fa-4x" />
							Cry Interpretation. Using an opensource database of 715 cries which have been categorized,
							we can also respond to the noise of crying whether it is ‘hunger’, ‘sleepiness’, ’boredom’,
							’colicky’, ’sick’, or ’has had enough’ ​​
						</span>
					</div>
				</div>

				<div className="">
					As with any standard baby monitor there is a live streaming video page. The security of this is
					important – each monitor would arrive with a unique 32 digit key used for the first sign-up linking
					to a unique subdomain, on top of the JWT secure login. No video is saved (But a future option might
					be a play-back)
				</div>
			</div>
		</div>
		<div className="container-fluid homePageLogo">
			<div className="d-flex flex-row justify-content-around">
				<img className="img-fluid m-2" src={RPi_Logo} />
				<img className="img-fluid m-2" src={TF_Logo} />
				<img className="img-fluid m-2" src={OpenCV_Logo} />
			</div>
		</div>
	</div>
);
