import React, { useState } from "react";
import styled from "styled-components";
import { Card, Form, Radio, Space, Button, RadioChangeEvent } from "antd";

// const sampleData = {
// 	address: "",
// 	startDate: "",
// 	endDate: "",
// 	title: "설문샘플",
// 	discription: "샘플입니다",
// 	questions: [
// 		{ qType: 0, title: "", options: [""], imgs: [""] },
// 		{ qType: 1, title: "객관식1", options: ["1", "2", "3", "4"], imgs: [""] },
// 		{
// 			qType: 2,
// 			title: "객관식2",
// 			options: [""],
// 			imgs: [
// 				"blob:http://localhost:3000/cdb3db3a-22b0-4f6e-81ee-c714d696e2b9",
// 				"blob:http://localhost:3000/4bc22b92-6b5f-430a-8a2e-cd63250ce261",
// 				"blob:http://localhost:3000/12eb53af-9348-48b0-ae59-24273f8e1e32",
// 			],
// 		},
// 		{ qType: 3, title: "주관식3", options: ["샘플주관식"], imgs: [""] },
// 		{
// 			qType: 4,
// 			title: "주관식4",
// 			options: [""],
// 			imgs: ["blob:http://localhost:3000/12eb53af-9348-48b0-ae59-24273f8e1e32"],
// 		},
// 	],
// };

interface questionData {
	QuestionIdx: number;
	title: string;
	options: string[];
	sendData: (idx: number, data: any) => void;
}

export function ResponseOption({
	QuestionIdx,
	title,
	options,
	sendData,
}: questionData) {
	const optionNumber = options.length;
	const choosed: { label: string; value: number }[] = [];
	for (let i = 0; i < optionNumber; i += 1) {
		choosed.push({ label: options[i], value: i });
	}
	const [Answer, setAnswer] = useState(0);
	const onOptionChangeHandler = (e: RadioChangeEvent) => {
		console.log("radio checked", e.target.value);
		setAnswer(e.target.value);
	};
	const renderOptions = () => {
		const result = [];

		result.push(
			<Radio.Group options={choosed} onChange={onOptionChangeHandler} />,
		);

		return result;
	};

	return (
		<SurveyForm>
			<Label>{title}</Label>
			<br />
			<br />
			<br />

			<FormContainer layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					{renderOptions()}
				</FormWrapper>
			</FormContainer>
		</SurveyForm>
	);
}

const FormContainer = styled(Form)`
	display: block;
	float: left;
`;
const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	coler: #fff;
	display: block;
`;
const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
`;

const Radios = styled.div`
	float: left;
`;

const FormWrapper = styled.div`
	font-size: 2rem;
	display: block;
	float: left;
`;

const SurveyForm = styled(Card)`
	position: absolut;
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
