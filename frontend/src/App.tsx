import React, { useState } from "react";
import { GlobalStyle } from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage, CreateSurvey, ResponseSurvey } from "pages";
import { darkTheme, lightTheme } from "style/theme";
import { Header } from "components";

const getTheme = () => {
	const userTheme = localStorage.getItem("theme");
	return userTheme === "darkTheme" ? darkTheme : lightTheme;
};

export default function App() {
	const [theme, setTheme] = useState(getTheme());

	const switchTheme = () => {
		const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
		localStorage.setItem(
			"theme",
			nextTheme === lightTheme ? "lightTheme" : "darkTheme",
		);
		setTheme(nextTheme);
	};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Header switchTheme={switchTheme} />
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/create" component={CreateSurvey} />
					<Route exact path="/response/:surveyKey" component={ResponseSurvey} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
