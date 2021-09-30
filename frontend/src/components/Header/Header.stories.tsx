import React from "react";
import { Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

export default {
	title: "Components/Header",
	component: Header,
};

const Template: Story = ({ switchTheme }) => (
	<MemoryRouter>
		<Header switchTheme={switchTheme} />
	</MemoryRouter>
);

export const header = Template.bind({});
header.args = {
	switchTheme: () => console.log("테마가 바뀌었습니다."),
};
