import React, { useState } from "react";
import styled from "styled-components";
import { Card, Form, Radio, RadioChangeEvent } from "antd";

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
		setAnswer(e.target.value);
		sendData(QuestionIdx, e.target.value);
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
				<FormWrapper>{renderOptions()}</FormWrapper>
			</FormContainer>
		</SurveyForm>
	);
}

const SurveyForm = styled(Card)`
	width: 80%;
	padding: 20px;
	margin: 20px;
	background-color: ${({ theme: { colors } }) => colors.tertiary};
	color: ${({ theme: { colors } }) => colors.secondary};
	border-color: ${({ theme: { colors } }) => colors.tertiary};
`;

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const FormContainer = styled(Form)`
	display: block;
	float: left;

	span {
		color: ${({ theme: { colors } }) => colors.secondary};
	}
`;

const FormWrapper = styled.div`
	font-size: 2rem;
	display: block;
	float: left;
`;
