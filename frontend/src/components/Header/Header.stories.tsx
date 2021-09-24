import React from "react";
import { Story } from "@storybook/react";
import { Header } from "./Header";

export default {
	title: "Components/Header",
	component: Header,
};

const Template: Story = ({ switchTheme }) => (
	<Header switchTheme={switchTheme} />
);

export const header = Template.bind({});
header.args = {
	switchTheme: () => console.log("테마가 바뀌었습니다."),
};
