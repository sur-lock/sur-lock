import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Space, Radio, Button } from "antd";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function OptionalSurvey({ QuestionIdx, sendData }: sendInterface) {
	const initialState = {
		qType: "select",
		title: "",
		options: [""],
		imgs: [""],
	};
	const [optionCount, setOptionCount] = useState(initialState);
	const [optionNumber, setOptionNumber] = useState(1);

	const onAdd = () => {
		const newOptionCount = optionCount;
		const newOptions = [...optionCount.options];
		newOptions.push("");
		newOptionCount.options = newOptions;

		setOptionCount(newOptionCount);
		setOptionNumber(optionNumber + 1);
	};

	const onDelete = () => {
		if (optionCount.options.length > 1) {
			const newOptionCount = optionCount;
			const newOptions = [...optionCount.options];
			newOptions.pop();
			newOptionCount.options = newOptions;

			setOptionCount(newOptionCount);
			setOptionNumber(optionNumber - 1);
		}
	};

	const onOptionChangeHandler =
		(index: number) => (e: React.FormEvent<HTMLInputElement>) => {
			const newOptionCount = optionCount;
			newOptionCount.options[index] = e.currentTarget.value;

			setOptionCount(newOptionCount);
		};

	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newOptionCount = optionCount;
		newOptionCount.title = e.currentTarget.value;
		setOptionCount(newOptionCount);
	};

	const onComplete = () => {
		if (optionCount.title === "") {
			alert("문항의 제목을 입력해주세요.");
			return;
		}
		if (optionNumber < 2) {
			alert("선택지는 최소 두개 이상이여야 합니다.");
			return;
		}
		for (let i = 0; i < optionNumber; i += 1) {
			if (optionCount.options[i] === "") {
				alert("비어있는 선택지가 존재합니다.");
				return;
			}
		}
		sendData(QuestionIdx, optionCount);
	};

	const renderOptions = () => {
		const result = [];
		for (let i = 0; i < optionNumber; i += 1) {
			result.push(
				<Radios>
					<Radio value={i}>
						<StyledInput
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
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper>
					<Form.Item name="SurveyTitle">
						<Label>객관식 질문</Label>
						<StyledInput
							placeholder="질문을 입력해주세요"
							onChange={onTitleChangeHandler}
						/>
					</Form.Item>
				</FormWrapper>
				<Space>
					<Space direction="vertical">{renderOptions()}</Space>
				</Space>
				<Buttons onClick={onComplete} size="small">
					저장
				</Buttons>
				<Buttons onClick={onDelete} size="small">
					삭제
				</Buttons>
				<Buttons onClick={onAdd} size="small">
					추가
				</Buttons>
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

const Radios = styled.div`
	float: left;
`;

const StyledInput = styled(Input)`
	background-color: transparent;
	color: ${({ theme: { colors } }) => colors.secondary};
	border: none;
	outline: none;
	border-bottom: 3px solid ${({ theme: { colors } }) => colors.secondary};
`;

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
	background-color: ${({ theme: { colors } }) => colors.primary};
	color: ${({ theme: { colors } }) => colors.secondary};
`;
