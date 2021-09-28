import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Space, Radio, Button } from "antd";

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
						<Input
							onChange={onTitleChangeHandler}
							placeholder="설문 제목을 입력해주세요"
						/>
					</Form.Item>
				</FormWrapper>
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item name="SurveyDiscription">
						<Label>설문 설명</Label>
						<Input
							onChange={onDiscriptionChangeHandler}
							placeholder="설문에 대한 설명을 입력해주세요"
						/>
					</Form.Item>
				</FormWrapper>
			</Form>
		</SurveyForm>
	);
}

const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
`;

const Radios = styled.div`
	float: left;
`;

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

const CardContainer = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	width: 100%;
	height: 100%;
	text-align: center;

	background: ${({ theme: { colors } }) => colors.phantomBlue};
	font-size: ${({ theme: { fonts } }) => fonts.size.title};
	${({ theme: { display } }) => display.flexCol()}
`;

const SurveyForm = styled(Card)`
	position: absolut;
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
