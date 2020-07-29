import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import RPi_Logo from "../../img/RPi-Logo.png";
import TF_Logo from "../../img/TF-Logo.png";
import OpenCV_Logo from "../../img/OpenCV-Logo.png";
import MagicMonitor_Logo from "../../img/MagicMonitor-Logo.png";
import "../../styles/home.scss";

export const About = () => (
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
			</div>
		</div>

		<div className="container-fluid">
			<h1>Meet the Developers</h1>
		</div>

		<div className="card-group container-fluid">
			<div className="container card-body" style={{ maxWidth: "24rem" }}>
				<h3>Chris Olmos</h3>
				<div className="">
					<div className="my-2">Economics Degree, 2003</div>
					<div className="my-2">20 years in banking and business owner​</div>
					<div className="my-2">Quit work to full time on inventions for the next 2 years​</div>
					<div className="my-2">Family with 2 children, a boy and girl​</div>
				</div>
			</div>
			<div className="container card-body" style={{ maxWidth: "24rem" }}>
				<h3>John Rohan</h3>
				<div className="">
					<div className="my-2">Self-taught in multiple computer langusges</div>
					<div className="my-2">15 years of freelance development and consulting​</div>
					<div className="my-2">4 years of resturant managment in Brikell, Miami​</div>
					<div className="my-2">Baby on the way</div>
				</div>
			</div>
		</div>

		<div className="container-fluid p-2">
			<div>
				<div className="p-1">Chris and John were brought together by 4GeeksAcadmey in March 2020.</div>
				<div className="p-1">One day Chris asked during class... </div>
				<div className="p-1">
					<q>Can we make a device that will alow us to listen to a babys cries and tell me why?</q>
				</div>
				<div className="p-1">And so began our journey...</div>

				<div className="p-1">
					We have put together a React website that incorperates a Python API and SQL database.
				</div>
				<div className="p-1">The Magic Monitor is a Raspberry Pi powered bt TensorFlow and OpenCV.</div>
				<div className="p-1">We developed the Python AI using Colaboratory.</div>
			</div>
		</div>
	</div>
);
