import React from "react";
import { Story } from "@storybook/react";
import { InducingScroll } from "./InducingScroll";

export default {
	title: "Components/Inducing Scroll",
	component: InducingScroll,
};

const Template: Story = () => <InducingScroll />;

export const inducingScroll = Template.bind({});
