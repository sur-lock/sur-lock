import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Image, Button } from "antd";
import axios from "axios";

interface sendInterface {
	QuestionIdx: number;
	sendData: (idx: number, data: any) => void;
}

export function AnswerSurveyWithImg({ QuestionIdx, sendData }: sendInterface) {
	const initialState = { ans: "", src: "" };

	const [Answer, setPreview] = useState(initialState);
	const [imagePreview, setImagePreview] = useState("");

	const onComplete = () => {
		sendData(QuestionIdx, Answer);
	};

	const onTitleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const newAnswer = Answer;
		newAnswer.ans = e.currentTarget.value;
		setPreview(newAnswer);
	};

	const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newAnswer = Answer;
		const { files } = event.target;

		if (files) {
			const formData = new FormData();
			formData.append("imageFile", files[0]);
			const newImagePreview = URL.createObjectURL(files[0]);
			setImagePreview(newImagePreview);

			axios({
				method: "post",
				url: "http://j5a501.p.ssafy.io:8080/images/upload",
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}).then(e => {
				newAnswer.src = e.data.response;
				setPreview(newAnswer);
			});
		}
	};

	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper>
					<Form.Item name="SurveyTitle">
						<Label>주관식 질문(이미지 첨부)</Label>
						<br />
						<br />
						<br />
						<ImageContainer className="addNew">
							<input accept="image/*" type="file" onChange={fileHandler} />
							<Image className="preview" src={imagePreview} />
						</ImageContainer>
						<Input
							onChange={onTitleChangeHandler}
							placeholder="질문을 입력해주세요"
						/>
					</Form.Item>
				</FormWrapper>
				<Buttons onClick={onComplete}>저장</Buttons>
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

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const ImageContainer = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
`;
