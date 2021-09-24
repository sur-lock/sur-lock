export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/style/GlobalStyle";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/style/theme";
import store from "../src/store";

// TODO: 두 개의 테마를 모두 테스트 할 수 있는 모양으로의 변경이 필요
addDecorator(Story => (
	<Provider store={store}>
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	</Provider>
));
