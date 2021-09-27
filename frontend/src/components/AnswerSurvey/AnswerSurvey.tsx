import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Button } from "antd";

const InputWIthLabel = () => {
	return (
		<Form layout="vertical" autoComplete="off" size="large">
			<FormWrapper style={{ overflow: "hidden" }}>
				<Form.Item name="SurveyTitle">
					<Label>주관식 질문</Label>
					<Input placeholder="질문을 입력해주세요" />
				</Form.Item>
			</FormWrapper>
		</Form>
	);
};

export function AnswerSurvey() {
	return (
		<CardContainer>
			<SurveyForm>
				<InputWIthLabel />
			</SurveyForm>
		</CardContainer>
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
	margin-top: 15px;
	margin-bottom: 15px;
	position: absolut;
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
