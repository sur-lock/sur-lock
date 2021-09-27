import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Space, Radio, Button } from "antd";

export function OptionalSurvey() {
	const [optionCount, setOptionCount] = useState(1);

	const onAdd = () => {
		setOptionCount(optionCount + 1);
	};

	const onDelete = () => {
		if (optionCount > 1) {
			setOptionCount(optionCount - 1);
		}
	};

	const renderOptions = () => {
		const result = [];
		for (let i = 0; i < optionCount; i += 1) {
			result.push(
				<Radios>
					<Radio value={i}>
						<Input placeholder="문항을 입력해주세요" />
					</Radio>
				</Radios>,
			);
		}
		return result;
	};
	return (
		<CardContainer>
			<SurveyForm>
				<Form layout="vertical" autoComplete="off" size="large">
					<FormWrapper style={{ overflow: "hidden" }}>
						<Form.Item name="SurveyTitle">
							<Label>객관식 질문</Label>
							<Input placeholder="질문을 입력해주세요" />
						</Form.Item>
					</FormWrapper>
					<Space>
						<Space direction="vertical">{renderOptions()}</Space>
						<Button onClick={onAdd}>추가</Button>
						<Button onClick={onDelete}>삭제</Button>
					</Space>
				</Form>
			</SurveyForm>
		</CardContainer>
	);
}

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
