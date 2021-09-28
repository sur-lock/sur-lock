import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Button } from "antd";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function AnswerSurvey({ QuestionIdx, sendData }: sendInterface) {
	const initialState = "";

	const [Answer, setAnswer] = useState(initialState);
	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newAnswer = e.currentTarget.value;
		setAnswer(Answer => newAnswer);
	};
	const onComplete = () => {
		sendData(QuestionIdx, Answer);
	};
	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item>
						<Label>주관식 질문</Label>
						<Input
							onChange={onTitleChangeHandler}
							placeholder="문항을 입력해주세요"
						/>
					</Form.Item>
				</FormWrapper>
			</Form>
			<Buttons onClick={onComplete}>저장</Buttons>
		</SurveyForm>
	);
}

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	coler: #fff;
	span {
		display: block;
	}
`;
const FormWrapper = styled.div`
	font-size: 2rem;
`;

const SurveyForm = styled(Card)`
	position: absolut;
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
`;
