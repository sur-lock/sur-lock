/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch, setUser } from "store";
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
	FullscreenSpinner,
} from "components";

import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import surLock from "../../api/blockchain-metadata.json";

export function CreateSurvey() {
	const { id, name } = useAppSelector(state => state.auth.user);
	const initialState = {
		address: "",
		startDate: "",
		endDate: "",
		title: "",
		discription: "",
		questions: [{ qType: "none", title: "", options: [""], imgs: [""] }],
	};
	const history = useHistory();
	const [QuestionCount, setQuestionCount] = useState(0);
	const [Survey, setSurvey] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);
	const surlockCA = surLock.smart_contract.ca;
	let SurveyURL = "";
	const infuraProvider = new ethers.providers.InfuraProvider(
		"ropsten",
		surLock.infura_api_key,
	);

	async function addSurvey() {
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
			if (Survey.title === "") {
				alert("설문 제목을 입력해주세요");
				return;
			}
			if (Survey.questions.length < 2) {
				alert("최소 하나의 설문문항을 입력해주세요");
				return;
			}

			const sendedData: any[] = [];

			for (let i = 0; i < Survey.questions.length; i += 1) {
				const tempQuestion: any[] = [];
				tempQuestion.push(Survey.questions[i].qType);
				tempQuestion.push(Survey.questions[i].title);
				tempQuestion.push(Survey.questions[i].options);
				tempQuestion.push(Survey.questions[i].imgs);
				sendedData.push(tempQuestion);
			}

			if (id) {
				if (String(id) === "0") {
					// eslint-disable-next-line no-alert
					alert("로그인 후 이용가능합니다.");
				} else {
					setIsLoading(true);

					const time = new Date().getTime();
					const surveyKey = String(id) + time;
					const transaction = await contract.addSurvey(
						Survey.title,
						String(id),
						surveyKey,
						"2021-09-29T00:00:00",
						"2021-10-29T23:59:59",
						sendedData,
					);

					SurveyURL = `http://j5a501.p.ssafy.io/response/${surveyKey}`;
					await transaction.wait();

					setIsLoading(false);
					history.push({
						pathname: "/complete",
						state: { SurveyURL },
					});
				}
			} else {
				// eslint-disable-next-line no-alert
				alert("로그인 후 이용가능합니다.");
			}
		}
	}

	async function onSubmit() {
		await addSurvey();
		// console.log(SurveyURL);
	}

	const onAddOptional = () => {
		const newSurvey = { ...Survey };
		newSurvey.questions.push({
			qType: "select",
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(newSurvey);
		setQuestionCount(QuestionCount + 1);
	};

	const onAddOptionalWithImage = () => {
		const newSurvey = { ...Survey };
		newSurvey.questions.push({
			qType: "selectImg",
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(newSurvey);
		setQuestionCount(QuestionCount + 1);
	};
	const onAddAnswer = () => {
		const newSurvey = { ...Survey };
		newSurvey.questions.push({
			qType: "write",
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(newSurvey);
		setQuestionCount(QuestionCount + 1);
	};
	const onAddAnswerWithImage = () => {
		const newSurvey = { ...Survey };
		newSurvey.questions.push({
			qType: "writeImg",
			title: "",
			options: [""],
			imgs: [""],
		});
		setSurvey(newSurvey);
		setQuestionCount(QuestionCount + 1);
	};

	const getDatafromChild = (index: number, val: any) => {
		if (Survey.questions[index].qType === "none") {
			const newSurvey = Survey;
			newSurvey.title = val.title;
			newSurvey.discription = val.disc;
			setSurvey(newSurvey);
		} else if (Survey.questions[index].qType === "write") {
			const newSurvey = Survey;
			newSurvey.questions[index].title = val;
			setSurvey(newSurvey);
		} else if (Survey.questions[index].qType === "writeImg") {
			const newSurvey = Survey;
			newSurvey.questions[index].title = val.ans;
			newSurvey.questions[index].imgs[0] = val.src;
			setSurvey(newSurvey);
		} else {
			const newSurvey = Survey;
			newSurvey.questions[index] = val;
			setSurvey(newSurvey);
		}
	};

	const renderSurveys = () => {
		const result = [];
		for (let i = 0; i <= QuestionCount; i += 1) {
			if (Survey.questions[i].qType === "none") {
				result.push(
					<SurveyTitle QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === "select") {
				result.push(
					<OptionalSurvey QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === "selectImg") {
				result.push(
					<OptionalSurveyWithImg QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === "write") {
				result.push(
					<AnswerSurvey QuestionIdx={i} sendData={getDatafromChild} />,
				);
			} else if (Survey.questions[i].qType === "writeImg") {
				result.push(
					<AnswerSurveyWithImg QuestionIdx={i} sendData={getDatafromChild} />,
				);
			}
		}
		return result;
	};

	return (
		<>
			<CardContainer>
				<Questions>{renderSurveys()}</Questions>
				<Fab icon="+">
					<Action text="제출" onClick={onSubmit}>
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
			{isLoading && <FullscreenSpinner />}
		</>
	);
}

const CardContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding-top: 200px;
	text-align: center;
	${({ theme: { display } }) => display.flexRow()}
`;

const Questions = styled.div`
	width: 45%;
	${({ theme: { display } }) => display.flexCol()}
	background-color: ${({ theme: { colors } }) => colors.tertiary};
	margin-bottom: 50px;
`;
