import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Button } from "antd";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function AnswerSurvey({ QuestionIdx, sendData }: sendInterface) {
	const initialState = "";

	const [Answer, setAnswer] = useState(initialState);

	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newAnswer = e.currentTarget.value;
		setAnswer(newAnswer);
	};

	const onComplete = () => {
		if (Answer === "") {
			alert("문항을 입력해주세요");
			return;
		}
		sendData(QuestionIdx, Answer);
	};

	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper>
					<Form.Item>
						<Label>주관식 질문</Label>
						<StyledInput
							onChange={onTitleChangeHandler}
							placeholder="문항을 입력해주세요"
						/>
					</Form.Item>
				</FormWrapper>
			</Form>
			<Buttons onClick={onComplete} size="small">
				저장
			</Buttons>
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

const FormWrapper = styled.div`
	font-size: 2rem;
`;

const StyledInput = styled(Input)`
	background-color: transparent;
	color: ${({ theme: { colors } }) => colors.secondary};
	border: none;
	outline: none;
	border-bottom: 3px solid ${({ theme: { colors } }) => colors.secondary};
`;

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
	background-color: ${({ theme: { colors } }) => colors.primary};
	color: ${({ theme: { colors } }) => colors.secondary};
`;
