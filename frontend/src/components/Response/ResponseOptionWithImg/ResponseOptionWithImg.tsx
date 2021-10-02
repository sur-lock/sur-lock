import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Image, Radio, Space, Button } from "antd";

interface questionData {
	QuestionIdx: number;
	title: string;
	imgs: string[];
	sendData: (idx: number, data: any) => void;
}

export function ResponseOptionWithImg({
	QuestionIdx,
	title,
	imgs,
	sendData,
}: questionData) {
	const renderOptions = () => {
		console.log(1);
	};
	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item name="SurveyTitle">
						<Label>객관식 질문(이미지첨부)</Label>
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

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Radios = styled.div`
	width: 30%;
	height: auto;
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

const SurveyForm = styled(Card)`
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
