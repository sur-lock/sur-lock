import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input } from "antd";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function SurveyTitle({ QuestionIdx, sendData }: sendInterface) {
	const initialState = { title: "", disc: "" };

	const [Survey, setSurvey] = useState(initialState);
	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newSurvey = Survey;
		newSurvey.title = e.currentTarget.value;
		setSurvey(Survey => newSurvey);
		sendData(QuestionIdx, Survey);
	};
	const onDiscriptionChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newSurvey = Survey;
		newSurvey.disc = e.currentTarget.value;
		setSurvey(Surve => newSurvey);
		sendData(QuestionIdx, Survey);
	};
	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item name="SurveyTitle">
						<Label>설문 제목</Label>
						<StyledInput
							onChange={onTitleChangeHandler}
							placeholder="설문 제목을 입력해주세요"
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

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const StyledInput = styled(Input)`
	background-color: transparent;
	color: ${({ theme: { colors } }) => colors.secondary};
	border: none;
	outline: none;
	border-bottom: 3px solid ${({ theme: { colors } }) => colors.secondary};
`;

const FormWrapper = styled.div`
	font-size: 2rem;
`;
