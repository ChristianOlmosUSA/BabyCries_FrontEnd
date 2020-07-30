import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import moment from "moment";
import "../../styles/historyList.scss";
import { Link, Redirect } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
/*...TO DO:  onClick we need to request the data for said day and open it in singlesleep  
eg
onClick={() => to="/singlesleep#API_CALL-DATE-TIME"}
*/
// John - Can you add your blue/pink background here too? (SingleSleep.scss)
// Theres also a slight logic error, click the 'previous days' button and sometimes the current week renders twice

let entries = [];
let selectedDay;
let data = [];

export const HistoryList = () => {
	const { actions, store } = useContext(Context);
	const [endDate, setEndDate] = useState(moment().subtract(7, "day"));
	const [days, setDays] = useState([]);
	let curDays = null;

	//console.log(selectedDay, "selectedDay");
	useEffect(
		() => {
			//let current = moment();

			/*while (endDate.isBefore(current)) {
				entries.push(moment(current));
				current = moment(current).subtract(1, "day");
			}*/
			actions.getUserData();

			//setDays(entries);
		},
		[] //endDate
	);

	return (
		<div className="text-center container-fluid backdrop text-center">
			{store.user_info ? <h1>Welcome {store.user_info.email}</h1> : ""}
			{store.token ? (
				<div className="d-flex flex-column mx-auto container homeImage p-3 m-3">
					{store.user_info.msg == "Token has expired" ? ((store.token = null), <Redirect to="/login" />) : ""}

					<h5>check on a past sleep?</h5>
					{store.babies &&
						store.babies.map((item, key) => {
							return (
								<div key={key}>
									<div>
										{item.first_name} {item.last_name}
									</div>
									{item.alarms.map(alarm => {
										let d = new Date(alarm.created_date);
										//console.log(d.getDate());
										if (selectedDay !== undefined) {
											curDays = selectedDay;
											if (curDays == d.getDate()) {
												//console.log("curdays == d.setdate");
												/*return (
													<div key={alarm.id}>The selected date is = {d.getUTCDate()}</div>
                                                );*/
												data.push(alarm);
												//console.log(data);
											}
										} else {
											if (curDays === null) {
												//console.log("null");
												curDays = d.getDate();
												//console.log(curDays, d.getUTCDate());
												return (
													<div key={alarm.id} onClick={() => (selectedDay = d.getDate())}>
														ID ={alarm.id} Date = {d.getUTCDate()}
														<Link className="nav-brand" to="./historylist">
															Select this day
														</Link>
													</div>
												);
											}
											if (curDays !== d.getDate()) {
												//console.log("curdays !== d.setdate");
												return (
													<div key={alarm.id} onClick={() => (selectedDay = d.getDate())}>
														ID ={alarm.id} Date = {d.getUTCDate()}
														<Link className="nav-brand" to="./historylist">
															Select this day
														</Link>
													</div>
												);
											}
										}
									})}
								</div>
							);
						})}
					{data.length ? (
						<>
							<div className="container d-flex flex-column text-left m-3">
								<div className="p-2">Breathing and Decible Level</div>
								<AreaChart
									width={300}
									height={150}
									data={data}
									layout="horizontal"
									verticalAlign="top"
									align="center"
									margin={{
										top: 0,
										right: 0,
										left: -60,
										bottom: 0
									}}>
									<XAxis dataKey="created_date" />
									<YAxis dataKey="decibel_level" />
									<Tooltip wrapperStyle={{ top: -140, left: 0 }} />
									<Legend />
									<Area type="monotone" dataKey="decibel_level" stroke="#82ca9d" fill="#82ca9d" />
									<Area type="monotone" dataKey="breathing" stroke="#8884d8" fill="#8884d8" />
								</AreaChart>
							</div>
							<div className="container d-flex flex-column text-left m-3">
								<div className="p-2">Alarms</div>
								<AreaChart
									width={300}
									height={150}
									data={data}
									layout="horizontal"
									verticalAlign="top"
									align="center"
									margin={{
										top: 0,
										right: 0,
										left: -60,
										bottom: 0
									}}>
									<XAxis dataKey="created_date" />
									<YAxis dataKey="tired" />
									<Legend />
									<Area type="monotone" dataKey="tired" stroke="#3498DB" fill="#3498DB" />
									<Area type="monotone" dataKey="hungry" stroke="#FF5733" fill="#FF5733" />
									<Area type="monotone" dataKey="enough" stroke="#F7DC6F" fill="#F7DC6F" />
									<Area type="monotone" dataKey="bored" stroke="#FCF3CF" fill="#FCF3CF" />
									<Area type="monotone" dataKey="colic" stroke="#82ca9d" fill="#82ca9d" />
									<Area type="monotone" dataKey="sick" stroke="#8884d8" fill="#8884d8" />
								</AreaChart>
							</div>
						</>
					) : (
						""
					)}
					{selectedDay ? (
						<Link
							className="nav-brand"
							to="./historylist"
							onClick={() => ((selectedDay = undefined), (data = []))}>
							Reset selected day
						</Link>
					) : (
						""
					)}
				</div>
			) : (
				<Redirect to="/login" />
			)}
			{/*
            {days.map(e => {
				return (
					<div key={e} className="history-entry">
						{e.format("D MMM YYYY")}
					</div>
				);
			})}
			<div
				type="button"
				className="history-entry"
				onClick={() => setEndDate(moment(endDate).subtract(7, "days"))}>
				Previous days
        </div>*/}
		</div>
	);
};
