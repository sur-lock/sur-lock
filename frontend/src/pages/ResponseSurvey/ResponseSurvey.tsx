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
import { useParams } from "react-router-dom";
import surLock from "../../api/blockchain-metadata.json";

type keyParams = {
	surveyKey: string;
};
export function ResponseSurvey() {
	const [data, setData] = useState({
		title: "",
		creator: "",
		endDate: "",
		questions: [],
	});
	const surlockCA = surLock.smart_contract.ca;
	const { surveyKey } = useParams<keyParams>();
	const userKey = localStorage.getItem("user_key");
	const infuraProvider = new ethers.providers.InfuraProvider(
		"ropsten",
		surLock.infura_api_key,
	);

	useEffect(() => {
		async function getData() {
			if (!surveyKey) {
				console.error("No entered key of survey. Please enter the key.");
				return;
			}

			if (infuraProvider) {
				const contract = new ethers.Contract(
					surlockCA,
					surLock.smart_contract.abi,
					infuraProvider,
				);

				try {
					const originData = await contract.getSurvey(surveyKey);
					setData(originData);
				} catch (err) {
					console.log("Error: ", err);
				}
			}
		}
		getData();
		console.log(data);
	}, []);

	async function addResponse() {
		if (infuraProvider) {
			const wallet = new ethers.Wallet(
				surLock.sender.private_key,
				infuraProvider,
			);

			const contract = new ethers.Contract(
				surlockCA,
				surLock.smart_contract.abi,
				wallet,
			);

			const answer: string[] = [];

			for (let i = 1; i < answerSheet.length; i += 1) {
				answer.push(String(answerSheet[i].val));
			}

			const transaction = await contract.addResponse(
				userKey,
				surveyKey,
				answer,
			);

			await transaction.wait();
		}
	}

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
		addResponse();
	};

	const moveToResult = () => {
		console.log(1);
	};

	return (
		<CardContainer>
			<Title>{data.title}</Title>

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
