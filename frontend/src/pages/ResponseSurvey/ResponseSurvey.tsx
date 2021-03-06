import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	ResponseOption,
	ResponseOptionWithImg,
	ResponseAnswer,
	ResponseAnswerWithImg,
	FullscreenSpinner,
} from "components";
import { RightOutlined, UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { ethers } from "ethers";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch, setUser } from "store";
import { useHistory } from "react-router-dom";
import surLock from "../../api/blockchain-metadata.json";

interface keyParams {
	surveyKey: string;
}

interface KakaoLogin {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	refresh_token_expires_in: number;
	token_type: string;
}

interface UserInfo {
	id: number;
	connected_at: string;
	kakao_account: {
		profile: {
			nickname: string;
		};
		profile_nickname_needs_agreement: boolean;
	};
	properties: { nickname: string };
}

const { Kakao } = window;

export function ResponseSurvey() {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		title: "",
		creator: "",
		endDate: "",
		questions: [],
		respondents: [],
	});
	const surlockCA = surLock.smart_contract.ca;
	const { surveyKey } = useParams<keyParams>();
	const { id, name } = useAppSelector(state => state.auth.user);
	const history = useHistory();
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
	}, []);

	useEffect(() => {
		if (!id) {
			alert("????????? ??? ?????????????????????.");
			doKakaoLogin();
		}
	}, [id]);

	const doKakaoLogin = async () => {
		await Kakao.Auth.login({
			success: ({ access_token }: KakaoLogin) => {
				Kakao.Auth.setAccessToken(access_token);
				Kakao.API.request({
					url: "/v2/user/me",
					success: ({ id, properties: { nickname } }: UserInfo) => {
						dispatch(setUser({ id, name: nickname }));
					},
				});
			},
			fail: (err: any) => {
				alert(err);
				history.goBack();
			},
		});
	};

	useEffect(() => {
		if (data) {
			const respondentsSet = new Set<string>(data.respondents);
			if (respondentsSet.has(String(id))) {
				alert("?????? ????????? ?????????????????????. ?????? ???????????? ???????????????.");
				history.push(`/result/${surveyKey}`);
			}
		}
	}, [data]);

	async function addResponse() {
		if (infuraProvider) {
			if (!id) {
				alert("????????? ??? ?????????????????????.");
				return;
			}
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

			const respondentsSet = new Set<string>(data.respondents);
			if (respondentsSet.has(String(id))) {
				alert("??? ??? ????????? ????????? ?????? ???????????? ??? ????????????.");
				return;
			}

			setIsLoading(true);

			const transaction = await contract.addResponse(
				String(id),
				surveyKey,
				answer,
			);

			await transaction.wait();

			setIsLoading(false);

			alert("????????? ????????? ????????? ???????????????.");
			history.push(`/result/${surveyKey}`);
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
		<>
			<CardContainer>
				<Questions>
					<Title>{data.title}</Title>
					{renderSurveys()}
				</Questions>
				<Fab icon="+">
					<Action text="??????" onClick={onSubmitSurvey}>
						<UploadOutlined />
					</Action>
					<Action text="????????????" onClick={moveToResult}>
						<RightOutlined />
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
	${({ theme: { display } }) => display.flexCol()}
`;

const Questions = styled.div`
	width: 45%;
	${({ theme: { display } }) => display.flexCol()}
	background-color: ${({ theme: { colors } }) => colors.tertiary};
	margin-bottom: 50px;
`;

const Title = styled.h1`
	text-align: center;
	color: ${({ theme: { colors } }) => colors.secondary};
	line-height: 130px;
`;
