import React from "react";
import { Story } from "@storybook/react";
import { FullscreenSpinner } from "./FullscreenSpinner";

export default {
	title: "Components/Fullscreen Spinner",
	component: FullscreenSpinner,
};

const Template: Story = () => <FullscreenSpinner />;

export const fullscreenSpinner = Template.bind({});
