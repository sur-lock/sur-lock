import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input } from "antd";

interface questionData {
	QuestionIdx: number;
	title: string;
	sendData: (idx: number, data: any) => void;
}

export function ResponseAnswer({ QuestionIdx, title, sendData }: questionData) {
	const [Answer, setAnswer] = useState("");

	const onAnswerChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setAnswer(e.currentTarget.value);
		sendData(QuestionIdx, Answer);
	};

	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item name="SurveyTitle">
						<Label>{title}</Label>
						<Input
							onChange={onAnswerChangeHandler}
							placeholder="답변을 입력해주세요"
						/>
					</Form.Item>
				</FormWrapper>
			</Form>
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
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
