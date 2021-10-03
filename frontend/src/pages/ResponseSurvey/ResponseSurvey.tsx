import React, { useState } from "react";
import styled from "styled-components";
import {
	ResponseOption,
	ResponseOptionWithImg,
	ResponseAnswer,
	ResponseAnswerWithImg,
} from "components";
import { RightOutlined, UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const sampleData = {
	address: "",
	startDate: "",
	endDate: "",
	title: "설문샘플",
	discription: "샘플입니다",
	questions: [
		{
			qType: 1,
			title: "객관식1",
			options: ["1", "2", "3", "4"],
			imgs: [""],
		},
		{
			qType: 2,
			title: "객관식2",
			options: [""],
			imgs: [
				"blob:http://localhost:3000/cdb3db3a-22b0-4f6e-81ee-c714d696e2b9",
				"blob:http://localhost:3000/4bc22b92-6b5f-430a-8a2e-cd63250ce261",
				"blob:http://localhost:3000/12eb53af-9348-48b0-ae59-24273f8e1e32",
			],
		},
		{ qType: 3, title: "주관식3", options: ["샘플주관식"], imgs: [""] },
		{
			qType: 4,
			title: "주관식4",
			options: [""],
			imgs: ["blob:http://localhost:3000/12eb53af-9348-48b0-ae59-24273f8e1e32"],
		},
	],
};

export function ResponseSurvey() {
	const initialState: { val: any; qType: number }[] = [];
	for (let i = 0; i < sampleData.questions.length; i += 1) {
		initialState.push({ val: null, qType: sampleData.questions[i].qType });
	}
	const [Answer, setAnswer] = useState(initialState);
	console.log(initialState);

	const getDatafromChild = (index: number, val: any) => {
		const newAnswer = Answer;
		newAnswer[index].val = val;
		setAnswer(Answer => newAnswer);
	};
	const count = sampleData.questions.length;

	const renderSurveys = () => {
		const result = [];
		for (let i = 0; i < count; i += 1) {
			if (sampleData.questions[i].qType === 1) {
				result.push(
					<ResponseOption
						title={sampleData.questions[i].title}
						options={sampleData.questions[i].options}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			} else if (sampleData.questions[i].qType === 2) {
				result.push(
					<ResponseOptionWithImg
						title={sampleData.questions[i].title}
						imgs={sampleData.questions[i].imgs}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			} else if (sampleData.questions[i].qType === 3) {
				result.push(
					<ResponseAnswer
						title={sampleData.questions[i].title}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			} else if (sampleData.questions[i].qType === 4) {
				result.push(
					<ResponseAnswerWithImg
						title={sampleData.questions[i].title}
						imgs={sampleData.questions[i].imgs}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			}
		}

		return result;
	};

	const onSubmitSurvey = () => {
		console.log(Answer);
	};

	const moveToResult = () => {
		console.log(1);
	};

	return (
		<CardContainer>
			<Title>설문조사 응답</Title>

			{renderSurveys()}
			<Fab icon="+">
				<Action text="제출" onClick={onSubmitSurvey}>
					<UploadOutlined />
				</Action>
				<Action text="결과보기" onClick={moveToResult}>
					<RightOutlined />
				</Action>
			</Fab>
		</CardContainer>
	);
}

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
