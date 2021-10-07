import React from "react";
import { Story } from "@storybook/react";
import { PieChartForSelect } from "./PieChartForSelect";

export default {
	title: "Components/Pie Chart For Select",
	component: PieChartForSelect,
};

const example_data = {
	qType: "select",
	title: "어느 역할을 선호하나요?",
	options: ["프론트엔드", "백엔드", "임베디드", "기타"],
	responses: [0, 0, 1, 1, 1, 1, 1, 0, 2, 3, 1, 1],
};

const example_data2 = {
	qType: "selectImg",
	title: "더 맘에 드는 장면은?",
	options: [
		"fc244cd0-64db-4e74-8d95-b4afaab2bba1",
		"8c6e5a78-04a3-4959-876d-0b139259a53e",
	],
	responses: [0, 0, 1, 1, 1, 1, 1, 0],
};

const Template: Story = () => {
	return (
		<>
			<PieChartForSelect data={example_data} />
			<PieChartForSelect data={example_data2} />
		</>
	);
};

export const pieChartForSelect = Template.bind({});
