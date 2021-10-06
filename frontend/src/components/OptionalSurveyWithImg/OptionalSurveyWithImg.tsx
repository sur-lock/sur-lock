import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Image, Radio, Space, Button } from "antd";
import axios from "axios";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function OptionalSurveyWithImg({
	QuestionIdx,
	sendData,
}: sendInterface) {
	const initialState = {
		qType: "selectImg",
		title: "",
		options: [""],
		imgs: [""],
	};
	const [optionModel, setOptionModel] = useState(initialState);
	const [optionCount, setOptionCount] = useState(1);
	const initPreview: string[] = [];
	const [imagePreview, setImagePreview] = useState(initPreview);

	const onAdd = () => {
		const newOptionModel = optionModel;
		const newOptions = [...optionModel.options];
		newOptions.push("");
		newOptionModel.options = newOptions;
		const newOptionImgs = [...optionModel.imgs];
		newOptionImgs.push("");
		newOptionModel.imgs = newOptionImgs;
		const newImagePreview = [...imagePreview];
		newImagePreview.push("");

		setOptionModel(optionModel => newOptionModel);
		setOptionCount(optionCount + 1);
		setImagePreview(imagePreview => newImagePreview);
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
			const newImagePreview = [...imagePreview];

			if (files) {
				newOptionImgs[idx] = URL.createObjectURL(files[0]);
				newOptionModel.imgs = newOptionImgs;
				newImagePreview[idx] = URL.createObjectURL(files[0]);
				console.log("#####################");
				console.log(URL.createObjectURL(files[0]));
				const formData = new FormData();
				formData.append("imageFile", files[0]);

				axios({
					method: "post",
					url: "http://j5a501.p.ssafy.io:8080/images/upload",
					data: formData,
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}).then(e => {
					// console.log(e);
					newOptionImgs[idx] = e.data.response;
					// console.log(newOptionImgs);
				});
			}
			setOptionModel(optionModel => newOptionModel);
			setImagePreview(imagePreview => newImagePreview);
			// console.log(optionModel);
			// console.log(imagePreview);
		};

	const renderOptions = () => {
		const result = [];
		for (let i = 0; i < optionCount; i += 1) {
			result.push(
				<Radios>
					<Radio disabled>
						<ImageContainer className="addNew">
							<form encType="multipart/form-data">
								<input
									id="imageFile"
									accept="image/*"
									type="file"
									onChange={fileHandler(i)}
								/>
							</form>

							<Image className="preview" src={imagePreview[i]} />
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
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
`;
