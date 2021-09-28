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
import { Card } from "antd";
import {
	AnswerSurvey,
	OptionalSurvey,
	AnswerSurveyWithImg,
	OptionalSurveyWithImg,
	SurveyTitle,
} from "components";

import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

export function CreateSurvey() {
	const initialState = {
		address: "",
		startDate: "",
		endDate: "",
		title: "",
		discription: "",
		questions: [{ qType: 0, title: "", options: [""], imgs: [""] }],
	};
	const [QuestionCount, setQuestionCount] = useState(0);
	const [Survey, setSurvey] = useState(initialState);

	const onAddOptional = () => {
		const newSurvey = Survey;
		newSurvey.questions.push({
			qType: 1,
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(Survey => newSurvey);
		setQuestionCount(QuestionCount + 1);
	};
	const onAddOptionalWithImage = () => {
		const newSurvey = Survey;
		newSurvey.questions.push({
			qType: 2,
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(Survey => newSurvey);
		setQuestionCount(QuestionCount + 1);
	};
	const onAddAnswer = () => {
		const newSurvey = Survey;
		newSurvey.questions.push({
			qType: 3,
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(Survey => newSurvey);
		setQuestionCount(QuestionCount + 1);
	};
	const onAddAnswerWithImage = () => {
		const newSurvey = Survey;
		newSurvey.questions.push({
			qType: 4,
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(Survey => newSurvey);
		setQuestionCount(QuestionCount + 1);
	};

	const getDatafromChild = (index: number, val: any) => {
		if (Survey.questions[index].qType === 0) {
			const newSurvey = Survey;
			newSurvey.title = val.title;
			newSurvey.discription = val.disc;
			setSurvey(Survey => newSurvey);
		} else {
			const newSurvey = Survey;
			newSurvey.questions[index] = val;
			setSurvey(Survey => newSurvey);
		}
		console.log(Survey);
	};

	const renderSurveys = () => {
		const result = [];
		for (let i = 0; i <= QuestionCount; i += 1) {
			if (Survey.questions[i].qType === 0) {
				result.push(
					<SurveyTitle QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === 1) {
				result.push(
					<OptionalSurvey QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === 2) {
				result.push(
					<OptionalSurveyWithImg QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === 3) {
				result.push(<AnswerSurvey />);
			} else if (Survey.questions[i].qType === 4) {
				result.push(<AnswerSurveyWithImg />);
			}
		}
		return result;
	};

	return (
		<CardContainer>
			<Title>설문조사 생성</Title>
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

const Title = styled.h1`
	font-size: 10rem;
	text-align: center;
	color: #fff;
	line-height: 130px;
	span {
		display: block;
	}
`;
