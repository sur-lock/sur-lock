import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Button } from "antd";

const InputWIthLabel = () => {
	return (
		<Form layout="vertical" autoComplete="off" size="large">
			<FormWrapper style={{ overflow: "hidden" }}>
				<Form.Item name="SurveyTitle">
					<Label>객관식 질문</Label>
					<Input placeholder="질문을 입력해주세요" />
				</Form.Item>
			</FormWrapper>
			<FormWrapper style={{ overflow: "hidden" }}>
				<Form.Item name="SurveyDiscription">
					<Label>답변란</Label>
					<Input placeholder="질문에 대한 답변란" />
				</Form.Item>
			</FormWrapper>
		</Form>
	);
};

export function OptionalSurvey() {
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
	width: 100vw !important;
	height: 100vh !important;
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
