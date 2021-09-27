import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Card, Form, Input, Drawer, Button } from "antd";

// 추가버튼은 추후 FAB 관련 라이브러리 하나 찾아서 이용예정

// 1차적으로 Drawer를 이용하여 구현하였으나 Floating Action Button(FAB)을 이용하여 구현 예정
// ******************이부분부터*****************
const AddCard = () => {
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};
	return (
		<>
			<FloatingButton
				type="primary"
				onClick={showDrawer}
				shape="circle"
				icon={<PlusCircleTwoTone />}
				size="large"
			/>
			<Drawer
				title="설문 문항 추가"
				placement="right"
				onClose={onClose}
				visible={visible}
			>
				<p>주관식 이미지</p>
				<p>주관식</p>
				<p>객관식</p>
				<p>객관식 이미지</p>
			</Drawer>
		</>
	);
};

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
	return (
		<CardContainer>
			<Title>설문조사 생성</Title>
			<SurveyForm>
				<TitleInputWIthLabel />
			</SurveyForm>
			<AddCard />
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

const Title = styled.h1`
	font-size: 10rem;
	text-align: center;
	color: #fff;
	line-height: 130px;
	span {
		display: block;
	}
`;
