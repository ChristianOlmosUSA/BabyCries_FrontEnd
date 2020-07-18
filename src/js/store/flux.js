const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
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
			updateSettings: (babyName, dob, timeZone, gender) => {
				let store = getStore();
				if (store.token != null) {
					console.log("token found, token = " + store.token);
					const data = {
						babyName: babyName,
						dob: dob,
						timeZone: timeZone,
						gender: gender
					};
					fetch("https://3000-f3c76e20-2de6-4ec7-9549-62591ce8be59.ws-us02.gitpod.io/login", {
						method: "PUT", // or 'PUT'
						headers: {
							"Content-Type": "application/json"
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

				fetch("https://3000-f3c76e20-2de6-4ec7-9549-62591ce8be59.ws-us02.gitpod.io/login", {
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

						setStore({ token: store.token });
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
