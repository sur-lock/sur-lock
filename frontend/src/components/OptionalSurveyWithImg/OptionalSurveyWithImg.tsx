import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Image, Radio, Space, Button } from "antd";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function OptionalSurveyWithImg({
	QuestionIdx,
	sendData,
}: sendInterface) {
	const initialState = { qType: 2, title: "", options: [""], imgs: [""] };
	const [optionModel, setOptionModel] = useState(initialState);
	const [optionCount, setOptionCount] = useState(1);

	const onAdd = () => {
		const newOptionModel = optionModel;
		const newOptions = [...optionModel.options];
		newOptions.push("");
		newOptionModel.options = newOptions;
		const newOptionImgs = [...optionModel.imgs];
		newOptionImgs.push("");
		newOptionModel.imgs = newOptionImgs;

		setOptionModel(optionModel => newOptionModel);
		setOptionCount(optionCount + 1);
		console.log(optionModel);
	};

	const onDelete = () => {
		if (optionCount > 1) {
			const newOptionModel = optionModel;
			const newOptions = [...optionModel.options];
			const newOptionImgs = [...optionModel.imgs];
			newOptions.pop();
			newOptionImgs.pop();
			newOptionModel.options = newOptions;
			newOptionModel.imgs = newOptionImgs;
			setOptionModel(optionModel => newOptionModel);
			setOptionCount(optionCount - 1);
		}
	};

	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newOptionModel = optionModel;
		newOptionModel.title = e.currentTarget.value;
		setOptionModel(optionModel => newOptionModel);
	};
	const onComplete = () => {
		sendData(QuestionIdx, optionModel);
	};
	const fileHandler =
		(idx: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const newOptionModel = optionModel;
			const newOptionImgs = [...optionModel.imgs];
			const { files } = event.target;
			if (files) {
				newOptionImgs[idx] = URL.createObjectURL(files[0]);
				newOptionModel.imgs = newOptionImgs;
			}
			setOptionModel(optionModel => newOptionModel);
			console.log(optionModel);
		};

	const renderOptions = () => {
		const result = [];
		for (let i = 0; i < optionCount; i += 1) {
			result.push(
				<Radios>
					<Radio disabled>
						<ImageContainer className="addNew">
							<input accept="image/*" type="file" onChange={fileHandler(i)} />
							<Image className="preview" src={optionModel.imgs[i]} />
						</ImageContainer>
					</Radio>
				</Radios>,
			);
		}
		return result;
	};
	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item name="SurveyTitle">
						<Label>객관식 질문(이미지첨부)</Label>
						<Input
							placeholder="질문을 입력해주세요"
							onChange={onTitleChangeHandler}
						/>
					</Form.Item>
				</FormWrapper>
				<Space>
					<Space direction="vertical">{renderOptions()}</Space>
				</Space>
				<Buttons onClick={onComplete}>저장</Buttons>
				<Buttons onClick={onDelete}>그림삭제</Buttons>
				<Buttons onClick={onAdd}>그림추가</Buttons>
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
