import React, { ReactElement, useState } from "react";
import { GlobalStyle } from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "pages";
import { darkTheme, lightTheme } from "style/theme";
import { Header } from "components";

export default function App(): ReactElement {
	const [theme, setTheme] = useState(lightTheme);

	const switchTheme = () => {
		const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
		setTheme(nextTheme);
	};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header switchTheme={switchTheme} />
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
