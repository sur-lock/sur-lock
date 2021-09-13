import React, { ReactElement } from "react";
import { GlobalStyle } from "style/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "pages";

export default function App(): ReactElement {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
				</Switch>
			</Router>
		</>
	);
}
