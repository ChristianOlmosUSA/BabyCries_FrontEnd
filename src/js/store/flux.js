const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user_info: null,
			babies: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			setStore: setStore,
			dbCheck: () => {
				let data = {
					baby_id: 1,
					crying: 0,
					hungry: 100,
					tired: 0,
					enough: 0,
					bored: 0,
					colic: 0,
					sick: 0,
					decibel_level: 50,
					overheated: false,
					breathing: true,
					face_down: true,
					out_of_crib: false,
					is_active: true
				};
				fetch("https://magicmonitor.herokuapp.com/alarm", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTYwNzI5MDUsImlhdCI6MTU5NjA2OTMwNSwibmJmIjoxNTk2MDY5MzA1LCJzdWIiOjF9.fOxZT4raZfoB7tY49VukVnZjWF7oNSSG4qau6s6TTi0"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success from addAlarm: ", data);
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			addAlarm: (
				dbBaby,
				crying,
				tmpHungry,
				tmpTired,
				tmpEnough,
				tmpBored,
				tmpColic,
				tmpSick,
				dbLevel,
				overheated,
				breathing,
				faceDown,
				outOfCrib
			) => {
				//console.log(dbBaby, crying, overheated, breathing, faceDown, outOfCrib);

				overheated == "True" ? (overheated = true) : (overheated = false);
				faceDown == "True" ? (faceDown = true) : (faceDown = false);
				outOfCrib == "True" ? (outOfCrib = true) : (outOfCrib = false);

				let store = getStore();
				if (store.token != null) {
					//	console.log("token found, token = " + store.token);
					const data = {
						baby_id: dbBaby,
						crying: crying,
						hungry: tmpHungry,
						tired: tmpTired,
						enough: tmpEnough,
						bored: tmpBored,
						colic: tmpColic,
						sick: tmpSick,
						decibel_level: parseInt(dbLevel),
						overheated: overheated,
						breathing: parseInt(breathing),
						face_down: faceDown,
						out_of_crib: outOfCrib,
						is_active: true
					};
					//console.log(data);
					fetch(process.env.API_HOST + "/alarm", {
						method: "POST", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(data => {
							//console.log("Success from addAlarm: ", data);
							setStore({
								babies: [...store.babies.alarms, data]
							});
							//console.log("setStore from addAlarm results: ", store.babies.alarms);
						})
						.catch(error => {
							//console.error("Error:", error);
						});
				} else {
					//console.log("token not found token = " + store.token);
				}
			},
			getUserData: () => {
				let store = getStore();
				if (store.token != null) {
					//console.log(store.user_info.username);
					//console.log("token found, token = " + store.token);
					let data = null;
					fetch(process.env.API_HOST + "/user", {
						method: "GET", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						}
						//body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(data => {
							//	console.log("Success from getUserData :", data);
							store.user_info = data;
							setStore({
								user_info: store.user_info,
								babies: store.user_info.babies
							});
						})
						.catch(error => {
							//	console.error("Error:", error);
						});
				} else {
					//	console.log("token not found token = " + store.token);
				}
			},
			addBaby: (babyFirstName, babyLastName, dob, timeZone, gender) => {
				let store = getStore();
				if (store.token != null) {
					//	console.log("token found, token = " + store.token);
					const data = {
						first_name: babyFirstName,
						last_name: babyLastName,
						dob_baby: dob,
						time_zone: timeZone,
						baby_gender: gender
					};
					fetch(process.env.API_HOST + "/babies", {
						method: "POST", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(data => {
							//	console.log("Success from addBaby: ", data);
							setStore({
								babies: [...store.babies, data]
							});
							//	console.log("setStore from addBaby results: ", store.babies);
						})
						.catch(error => {
							//	console.error("Error:", error);
						});
				} else {
					//console.log("token not found token = " + store.token);
				}
			},
			deleteBaby: babyID => {
				//console.log("Deleting baby = ", babyID);
				let store = getStore();
				if (store.token != null) {
					//	console.log("token found, token = " + store.token);
					const data = {
						baby_id: babyID
					};
					fetch(process.env.API_HOST + "/babies", {
						method: "DELETE", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(data => {
							//		console.log("Success:", data);
						})
						.catch(error => {
							//		console.error("Error:", error);
						});
				} else {
					//	console.log("token not found token = " + store.token);
				}
			},
			getToken: (email, password) => {
				//alert(email + " " + password);
				const data = {
					username: email,
					password: password
				};

				fetch(process.env.API_HOST + "/login", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						//	console.log("Success:", data);
						let store = getStore();
						store.token = data.jwt;
						store.user_info = {
							username: email
						};

						setStore({ token: store.token });
						setStore({ user_info: store.user_info });
					})
					.catch(error => {
						//	console.error("Error:", error);
					});
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
