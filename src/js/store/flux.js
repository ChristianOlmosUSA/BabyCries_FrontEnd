const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user_info: null,
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
			getUserData: () => {
				let store = getStore();
				if (store.token != null) {
					console.log(store.user_info.username);
					//console.log("token found, token = " + store.token);
					let data = null;
					fetch(
						"https://3000-a9b34f79-7131-40c9-8e4b-eb888a4a9dca.ws-us02.gitpod.io/getuser/" +
							store.user_info.username,
						{
							method: "GET", // or 'PUT'
							headers: {
								"Content-Type": "application/json",
								Authorization: "Bearer " + store.token
							}
							//body: JSON.stringify(data)
						}
					)
						.then(response => response.json())
						.then(data => {
							console.log("Success:", data);
							store.user_info = data;
							setStore({ user_info: store.user_info });
						})
						.catch(error => {
							console.error("Error:", error);
						});
				} else {
					console.log("token not found token = " + store.token);
				}
			},
			addBaby: (babyFirstName, babyLastName, dob, timeZone, gender) => {
				let store = getStore();
				if (store.token != null) {
					console.log("token found, token = " + store.token);
					const data = {
						first_name: babyFirstName,
						last_name: babyLastName,
						dob_baby: dob,
						time_zone: timeZone,
						baby_gender: gender
					};
					fetch("https://3000-a9b34f79-7131-40c9-8e4b-eb888a4a9dca.ws-us02.gitpod.io/babies", {
						method: "POST", // or 'PUT'
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify(data)
					})
						.then(response => response.json())
						.then(data => {
							console.log("Success:", data);
						})
						.catch(error => {
							console.error("Error:", error);
						});
				} else {
					console.log("token not found token = " + store.token);
				}
			},
			getToken: (email, password) => {
				//alert(email + " " + password);
				const data = {
					username: email,
					password: password
				};

				fetch("https://3000-a9b34f79-7131-40c9-8e4b-eb888a4a9dca.ws-us02.gitpod.io/login", {
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success:", data);
						let store = getStore();
						store.token = data.jwt;
						store.user_info = {
							username: email
						};

						setStore({ token: store.token });
						setStore({ user_info: store.user_info });
					})
					.catch(error => {
						console.error("Error:", error);
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
