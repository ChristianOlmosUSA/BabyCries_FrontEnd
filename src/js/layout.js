import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Video } from "./views/video";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Settings } from "./views/settings";
import { HistorySingleDay } from "./views/historySingleDay";
import { HistoryList } from "./views/historyList";
import { CreateNewAccount } from "./views/createNewAccount";
import { Dashboard } from "./views/dashboard";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain. (## we are building for 1080 × 1920)
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route path="/video" component={Video} />
						<Route path="/settings" component={Settings} />
						<Route path="/historysingleday" component={HistorySingleDay} />
						<Route path="/historylist" component={HistoryList} />
						<Route path="/createnewaccount" component={CreateNewAccount} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
