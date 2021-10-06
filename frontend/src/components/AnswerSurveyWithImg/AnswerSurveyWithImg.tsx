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
		setPreview(Answer => newAnswer);
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
				// console.log(e);
				newAnswer.src = e.data.response;
				setPreview(Answer => newAnswer);
				// console.log(newOptionImgs);
				console.log(Answer);
			});
		}
	};
	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
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

const Buttons = styled(Button)`
	position: relative;
	float: right;
	top: 90%;
	margin: 5px;
`;
const ImageContainer = styled.div`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
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
	display: block;
	font-size: 2rem;
`;

const SurveyForm = styled(Card)`
	position: absolut;
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
