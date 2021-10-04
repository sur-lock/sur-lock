import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	ResponseOption,
	ResponseOptionWithImg,
	ResponseAnswer,
	ResponseAnswerWithImg,
} from "components";
import { RightOutlined, UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { ethers } from "ethers";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const surlockCA = "0x1B57F6A4c67cC0961aF90c3B4c1b599c8bD97759";
const infuraProvider = new ethers.providers.InfuraProvider(
	"ropsten",
	"6d88878e015047cbad527b89ae00e284",
);
const surveyKey = "survey1";
const private_key =
	"0x9292c97646451b2a9540062e8ceb465f61cb29f17d0e55c116c95051049f54bd";
const abi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_respondent",
				type: "string",
			},
			{
				internalType: "string",
				name: "_key",
				type: "string",
			},
			{
				internalType: "string[]",
				name: "_response",
				type: "string[]",
			},
		],
		name: "addResponse",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_creator",
				type: "string",
			},
			{
				internalType: "string",
				name: "_key",
				type: "string",
			},
			{
				internalType: "string",
				name: "_startDate",
				type: "string",
			},
			{
				internalType: "string",
				name: "_endDate",
				type: "string",
			},
			{
				components: [
					{
						internalType: "string",
						name: "qType",
						type: "string",
					},
					{
						internalType: "string",
						name: "title",
						type: "string",
					},
					{
						internalType: "string[]",
						name: "options",
						type: "string[]",
					},
					{
						internalType: "string[]",
						name: "imgs",
						type: "string[]",
					},
				],
				internalType: "struct SurLock.Question[]",
				name: "_questions",
				type: "tuple[]",
			},
		],
		name: "addSurvey",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_key",
				type: "string",
			},
		],
		name: "getResponses",
		outputs: [
			{
				internalType: "string[][]",
				name: "",
				type: "string[][]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_key",
				type: "string",
			},
		],
		name: "getSurvey",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "creator",
						type: "string",
					},
					{
						internalType: "string",
						name: "startDate",
						type: "string",
					},
					{
						internalType: "string",
						name: "endDate",
						type: "string",
					},
					{
						components: [
							{
								internalType: "string",
								name: "qType",
								type: "string",
							},
							{
								internalType: "string",
								name: "title",
								type: "string",
							},
							{
								internalType: "string[]",
								name: "options",
								type: "string[]",
							},
							{
								internalType: "string[]",
								name: "imgs",
								type: "string[]",
							},
						],
						internalType: "struct SurLock.Question[]",
						name: "questions",
						type: "tuple[]",
					},
					{
						internalType: "string[][]",
						name: "responses",
						type: "string[][]",
					},
					{
						internalType: "string[]",
						name: "respondents",
						type: "string[]",
					},
				],
				internalType: "struct SurLock.Survey",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

export function ResponseSurvey() {
	const [data, setData] = useState({ creator: "", endDate: "", questions: [] });

	useEffect(() => {
		async function getData() {
			if (!surveyKey) {
				console.error("No entered key of survey. Please enter the key.");
				return;
			}

			if (infuraProvider) {
				const contract = new ethers.Contract(surlockCA, abi, infuraProvider);

				try {
					const originData = await contract.getSurvey("surveyTest3");
					// console.log("data: ", originData);
					// console.log(typeof originData);
					setData(originData);
				} catch (err) {
					console.log("Error: ", err);
				}
			}
		}
		getData();
	}, []);

	const answerSheet: { val: any; qType: string }[] = [];

	for (let i = 0; i < data.questions.length; i += 1) {
		answerSheet.push({ val: null, qType: data.questions[i][0] });
	}

	// console.log(answerSheet);
	const getDatafromChild = (index: number, val: any) => {
		answerSheet[index].val = val;
	};
	const count = data.questions.length;

	const renderSurveys = () => {
		const result = [];
		for (let i = 0; i < count; i += 1) {
			if (data.questions[i][0] === "select") {
				result.push(
					<ResponseOption
						title={data.questions[i][1]}
						options={data.questions[i][2]}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			} else if (data.questions[i][0] === "selectImg") {
				result.push(
					<ResponseOptionWithImg
						title={data.questions[i][1]}
						imgs={data.questions[i][3]}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			} else if (data.questions[i][0] === "write") {
				result.push(
					<ResponseAnswer
						title={data.questions[i][1]}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			} else if (data.questions[i][0] === "writeImg") {
				result.push(
					<ResponseAnswerWithImg
						title={data.questions[i][1]}
						imgs={data.questions[i][3]}
						QuestionIdx={i}
						sendData={getDatafromChild}
					/>,
				);
			}
		}

		return result;
	};

	const onSubmitSurvey = () => {
		console.log(answerSheet);
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
