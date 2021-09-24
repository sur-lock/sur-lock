import React from "react";
import { Story } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";

export default {
	title: "Components/Theme Toggle",
	component: ThemeToggle,
};

const Template: Story = ({ switchTheme }) => (
	<ThemeToggle switchTheme={switchTheme} />
);

export const themeToggle = Template.bind({});
themeToggle.args = {
	switchTheme: () => console.log("테마가 바뀌었습니다."),
};
