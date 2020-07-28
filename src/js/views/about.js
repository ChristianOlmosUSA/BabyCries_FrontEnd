import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
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
			</div>
		</div>

		<div className="p5 mt-3 flex-col">
			<div className="">
				<h2>Magic Monitor: <i>The Product</i></h2>
			</div>
			<div className="p5 mt-3">
				<div className="">Magic Monitor offers 3 new distinct functions no other baby monitor offers – especially from camera only product.​</div>
				<ol>
                    <li className="">Detects whether the baby is face up or face down. Most international guidelines suggest young babies are kept face up​ to prevent SIDS.</li>
                    <li className="">Identifies the breathing rate of the baby. The user gets default variables, and can also adjust these or disable the alert. But the great thing about these two functions is getting an alert to your phone by text message telling you if your baby has very rapid or slow breathing or has rolled onto their face​</li>
                    <li className="">Cry Interpretation. Using an opensource database of 715 cries which have been categorized, we can also respond to the noise of crying whether it is ‘hunger’, ‘sleepiness’, ’boredom’, ’colicky’, ’sick’, or ’has had enough’ ​​</li>
                </ol>
                
				<div className="">As with any standard baby monitor there is a live streaming video page. The security of this is important – each monitor would arrive with a unique 32 digit key used for the first sign-up linking to a unique subdomain, on top of the JWT secure login. No video is saved (But a future option might be a play-back)</div>
			</div>
			<div className="container homePageLogo">
				<div className="d-flex flex-row justify-content-around w-50 ml-3">
					<img className="img-fluid m-3" src={RPi_Logo} />
					<img className="img-fluid m-3" src={TF_Logo} />
					<img className="img-fluid m-3" src={OpenCV_Logo} />
				</div>
			</div>
		</div>
	</div>
);
