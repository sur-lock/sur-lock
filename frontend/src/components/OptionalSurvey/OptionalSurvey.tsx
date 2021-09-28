import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Space, Radio, Button } from "antd";

interface sendInterface {
	sendData: (data: any) => void;
}

export function OptionalSurvey({ sendData }: sendInterface) {
	const initialState = { qType: 1, title: "", options: [""], imgs: [""] };
	const [optionCount, setOptionCount] = useState(initialState);
	const [optionNumber, setOptionNumber] = useState(1);

	const onAdd = () => {
		const newOptionCount = optionCount;
		const newOptions = [...optionCount.options];
		newOptions.push("");
		newOptionCount.options = newOptions;

		setOptionCount(optionCount => newOptionCount);
		setOptionNumber(optionNumber + 1);
		sendData(optionCount);
	};

	const onDelete = () => {
		if (optionCount.options.length > 1) {
			const newOptionCount = optionCount;
			const newOptions = [...optionCount.options];
			newOptions.pop();
			newOptionCount.options = newOptions;

			setOptionCount(optionCount => newOptionCount);
			setOptionNumber(optionNumber - 1);
			sendData(optionCount);
		}
	};

	const onOptionChangeHandler =
		(index: number) => (e: React.FormEvent<HTMLInputElement>) => {
			const newOptionCount = optionCount;
			newOptionCount.options[index] = e.currentTarget.value;

			setOptionCount(optionCount => newOptionCount);
			sendData(optionCount);
		};

	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newOptionCount = optionCount;
		newOptionCount.title = e.currentTarget.value;
		setOptionCount(optionCount => newOptionCount);
		sendData(optionCount);
	};

	const renderOptions = () => {
		const result = [];
		for (let i = 0; i < optionNumber; i += 1) {
			result.push(
				<Radios>
					<Radio value={i}>
						<Input
							placeholder="
						문항을 입력해주세요"
							onChange={onOptionChangeHandler(i)}
						/>
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
							<Input
								placeholder="질문을 입력해주세요"
								onChange={onTitleChangeHandler}
							/>
						</Form.Item>
					</FormWrapper>
					<Space>
						<Space direction="vertical">{renderOptions()}</Space>
					</Space>
					<Buttons onClick={onDelete}>삭제</Buttons>
					<Buttons onClick={onAdd}>추가</Buttons>
				</Form>
			</SurveyForm>
		</CardContainer>
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
