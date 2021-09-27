import React, { useState } from "react";
import styled from "styled-components";
import {
	CheckOutlined,
	FileAddOutlined,
	ProfileOutlined,
	PictureOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Button } from "antd";
import {
	AnswerSurvey,
	OptionalSurvey,
	AnswerSurveyWithImg,
	OptionalSurveyWithImg,
} from "components";

import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

// 추가버튼은 추후 FAB 관련 라이브러리 하나 찾아서 이용예정

// 1차적으로 Drawer를 이용하여 구현하였으나 Floating Action Button(FAB)을 이용하여 구현 예정
// ******************이부분부터*****************
// const AddCard = () => {
// 	const [visible, setVisible] = useState(false);
// 	const showDrawer = () => {
// 		setVisible(true);
// 	};
// 	const onClose = () => {
// 		setVisible(false);
// 	};
// 	return (
// 		<>
// 			<FloatingButton
// 				type="primary"
// 				onClick={showDrawer}
// 				shape="circle"
// 				icon={<PlusCircleTwoTone />}
// 				size="large"
// 			/>
// 			<Drawer
// 				title="설문 문항 추가"
// 				placement="right"
// 				onClose={onClose}
// 				visible={visible}
// 			>
// 				<p>주관식 이미지</p>
// 				<p>주관식</p>
// 				<p>객관식</p>
// 				<p>객관식 이미지</p>
// 			</Drawer>
// 		</>
// 	);
// };

// ************이부분까지 FAB이용해서 수정예정 ***************************
const TitleInputWIthLabel = () => {
	return (
		<Form layout="vertical" autoComplete="off" size="large">
			<FormWrapper style={{ overflow: "hidden" }}>
				<Form.Item name="SurveyTitle">
					<Label>설문 제목</Label>
					<Input placeholder="설문 제목을 입력해주세요" />
				</Form.Item>
			</FormWrapper>
			<FormWrapper style={{ overflow: "hidden" }}>
				<Form.Item name="SurveyDiscription">
					<Label>설문 설명</Label>
					<Input placeholder="설문에 대한 설명을 입력해주세요" />
				</Form.Item>
			</FormWrapper>
		</Form>
	);
};

export function CreateSurvey() {
	const [Questions, setQuestion] = useState([0]);
	const onAddOptional = () => {
		setQuestion(Questions => [...Questions, 1]);
	};
	const onAddOptionalWithImage = () => {
		setQuestion(Questions => [...Questions, 2]);
	};
	const onAddAnswer = () => {
		setQuestion(Questions => [...Questions, 3]);
	};
	const onAddAnswerWithImage = () => {
		setQuestion(Questions => [...Questions, 4]);
	};

	const renderSurveys = () => {
		const result = [];
		for (let i = 1; i < Questions.length; i += 1) {
			if (Questions[i] === 1) {
				result.push(<OptionalSurvey />);
			} else if (Questions[i] === 2) {
				result.push(<OptionalSurveyWithImg />);
			} else if (Questions[i] === 3) {
				result.push(<AnswerSurvey />);
			} else if (Questions[i] === 4) {
				result.push(<AnswerSurveyWithImg />);
			}
		}
		return result;
	};
	return (
		<CardContainer>
			<Title>설문조사 생성</Title>
			<SurveyForm>
				<TitleInputWIthLabel />
			</SurveyForm>
			{renderSurveys()}
			<Fab icon="+">
				<Action text="제출">
					<UploadOutlined />
				</Action>
				<Action text="객관식" onClick={onAddOptional}>
					<CheckOutlined />
				</Action>
				<Action text="객관식(이미지)" onClick={onAddOptionalWithImage}>
					<FileAddOutlined />
				</Action>
				<Action text="주관식" onClick={onAddAnswer}>
					<ProfileOutlined />
				</Action>
				<Action text="주관식(이미지)" onClick={onAddAnswerWithImage}>
					<PictureOutlined />
				</Action>
			</Fab>
		</CardContainer>
	);
}

const FloatingButton = styled(Button)`
	margin: 10px;
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
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: 2rem;
`;

const CardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	text-align: center;
	background: ${({ theme: { colors } }) => colors.phantomBlue};
	font-size: ${({ theme: { fonts } }) => fonts.size.title};
	${({ theme: { display } }) => display.flexCol()}
`;

const SurveyForm = styled(Card)`
	margin-top: 15px;
	margin-bottom: 15px;
	width: 65%;
	padding: 20px;
	margin: 20px;
`;

const Title = styled.h1`
	font-size: 10rem;
	text-align: center;
	color: #fff;
	line-height: 130px;
	span {
		display: block;
	}
`;
