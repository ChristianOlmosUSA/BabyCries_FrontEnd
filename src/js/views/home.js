import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center backdrop">
		<div className="d-flex justify-content-between text-nowrap">
			<h1 className="p-5">
				<span className="p5 m5">nanny cam ai baby monitor</span>
				<div className="p5 mt-3">
					<h5 className="p2">Some information about the product</h5>
					<h5 className="p2">Some information about the product</h5>
					<h5 className="p2">Some information about the product</h5>
					<h5 className="p2">Some information about the product</h5>
				</div>
			</h1>
			<p className="p-5">
				<img className="shadow-lg" src={rigoImage} />
			</p>
		</div>

		<span className="p5 m5">nanny cam ai baby monitor</span>
		<div className="p5 mt-3">
			<h5 className="p2">Some information about the product</h5>
			<h5 className="p2">Some information about the product</h5>
			<h5 className="p2">Some information about the product</h5>
			<h5 className="p2">Some information about the product</h5>
		</div>
	</div>
);
