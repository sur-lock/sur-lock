import React from "react";
import { Story } from "@storybook/react";
import { MainPage } from "./MainPage";

export default {
	title: "Pages/Main Page",
	component: MainPage,
};

const Template: Story = () => <MainPage />;

export const mainpage = Template.bind({});
