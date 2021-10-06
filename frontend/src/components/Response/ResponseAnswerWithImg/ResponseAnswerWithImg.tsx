import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Image } from "antd";
import axios from "axios";

interface questionData {
	QuestionIdx: number;
	title: string;
	imgs: string[];
	sendData: (idx: number, data: any) => void;
}

export function ResponseAnswerWithImg({
	QuestionIdx,
	title,
	imgs,
	sendData,
}: questionData) {
	const useStateCallbackWrapper = (
		initilValue: any,
		callBack: (val: any) => void,
	) => {
		const [state, setState] = useState(initilValue);
		useEffect(() => callBack(state), [state]);
		return [state, setState];
	};

	const callBack = (state: string) => {
		sendData(QuestionIdx, Answer);
	};
	const [Answer, setAnswer] = useStateCallbackWrapper("", callBack);

	const onAnswerChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setAnswer(e.currentTarget.value);
	};

	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper>
					<Form.Item name="SurveyTitle">
						<Label>{title}</Label>
						<br />
						<br />
						<br />
						<Image
							width="100%"
							height="60%"
							src={`http://j5a501.p.ssafy.io:8080/images/${imgs[0]}`}
						/>
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

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;
