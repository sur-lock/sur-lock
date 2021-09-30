import React from "react";
import { Story } from "@storybook/react";
import { Footer } from "./Footer";

export default {
	title: "Components/Footer",
	component: Footer,
};

const Template: Story = () => <Footer />;

export const footer = Template.bind({});
