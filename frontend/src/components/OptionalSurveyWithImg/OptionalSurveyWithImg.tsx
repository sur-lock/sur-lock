import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Radio, Space, Button } from "antd";

const OptionWithImasge = () => {
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
		<ImageContainer className="addNew">
			<Image className="preview" src={src} alt={alt} />
			<input accept="image/*" type="file" onChange={fileHandler} />
		</ImageContainer>
	);
};

export function OptionalSurveyWithImg() {
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
						<OptionWithImasge />
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
							<Label>객관식 질문(이미지첨부)</Label>
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

const Image = styled.img`
	width: 30%;
	height: auto;
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
