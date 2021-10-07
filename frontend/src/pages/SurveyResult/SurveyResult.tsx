import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import { PieChartForSelect, SubjectiveSurveyResult } from "components";
import surLock from "../../api/blockchain-metadata.json";

interface keyParams {
	surveyKey: string;
}

export function SurveyResult() {
	const [questions, setQuestions] = useState([]);
	const [responses, setResponses] = useState([]);

	const surlockCA = surLock.smart_contract.ca;
	const { surveyKey } = useParams<keyParams>();
	const infuraProvider = new ethers.providers.InfuraProvider(
		"ropsten",
		surLock.infura_api_key,
	);

	useEffect(() => {
		(async () => {
			if (!surveyKey) {
				console.error("No entered key of survey. Please enter the key.");
				return;
			}

			if (!infuraProvider) return;

			try {
				const contract = new ethers.Contract(
					surlockCA,
					surLock.smart_contract.abi,
					infuraProvider,
				);
				const { questions, responses } = await contract.getSurvey(surveyKey);
				setQuestions(questions);
				setResponses(responses);
			} catch (err) {
				console.log("Error: ", err);
			}
		})();
	}, []);

	if (!questions) return <></>;
	return (
		<Wrapper>
			{questions.map((question: any, idx) => {
				if (question.qType === "select") {
					const data = {
						qType: question.qType,
						title: question.title,
						options: question.options,
						responses: responses.map((response: any) =>
							Number(response[idx - 1]),
						),
					};
					return <PieChartForSelect data={data} />;
				}
				if (question.qType === "selectImg") {
					const data = {
						qType: question.qType,
						title: question.title,
						options: question.imgs,
						responses: responses.map((response: any) =>
							Number(response[idx - 1]),
						),
					};
					return <PieChartForSelect data={data} />;
				}
				if (question.qType === "write" || question.qType === "writeImg") {
					const data = {
						title: question.title,
						responses: responses.map((response: any) => response[idx - 1]),
					};
					return <SubjectiveSurveyResult data={data} />;
				}
				return <></>;
			})}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 70%;
	${({ theme: { display } }) => display.flexCol()}
	margin-bottom: 25px;
`;
