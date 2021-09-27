import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Button } from "antd";

const InputWIthLabel = () => {
	const initialState = { alt: "", src: "" };

	const [{ alt, src }, setPreview] = useState(initialState);

	const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;

		if (files) {
			setPreview(
				files.length
					? {
							src: URL.createObjectURL(files[0]),
							alt: files[0].name,
					  }
					: initialState,
			);
		}
	};
	return (
		<Form layout="vertical" autoComplete="off" size="large">
			<FormWrapper style={{ overflow: "hidden" }}>
				<Form.Item name="SurveyTitle">
					<Label>주관식 질문(이미지 첨부)</Label>
					<br />
					<br />
					<br />
					<ImageContainer className="addNew">
						<Image className="preview" src={src} alt={alt} />
						<input accept="image/*" type="file" onChange={fileHandler} />
					</ImageContainer>
					<Input placeholder="질문을 입력해주세요" />
				</Form.Item>
			</FormWrapper>
		</Form>
	);
};

export function AnswerSurveyWithImg() {
	return (
		<CardContainer>
			<SurveyForm>
				<InputWIthLabel />
			</SurveyForm>
		</CardContainer>
	);
}

const Image = styled.img`
	width: 30%;
	height: auto;
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
