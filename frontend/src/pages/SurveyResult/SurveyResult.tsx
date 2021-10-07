import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import { PieChartForSelect } from "components";
import surLock from "../../api/blockchain-metadata.json";

interface keyParams {
	surveyKey: string;
}

export function SurveyResult() {
	const [title, setTitle] = useState("");
	const [endDate, setEndDate] = useState("");
	const [questions, setQuestions] = useState([]);
	const [respondents, setRespondents] = useState([]);
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
				const { title, endDate, questions, respondents, responses } =
					await contract.getSurvey(surveyKey);
				console.log(title);
				console.log(endDate);
				console.log(questions);
				console.log(respondents);
				console.log(responses);
				setTitle(title);
				setEndDate(endDate);
				setQuestions(questions);
				setRespondents(respondents);
				setResponses(responses);
			} catch (err) {
				console.log("Error: ", err);
			}
		})();
	}, []);

	return (
		<>
			{questions.map((question: any, idx) => {
				if (question.qType === "select") {
					const data = {
						qType: question.qType,
						title: question.title,
						options: question.options,
						responses: question.responses.map((response: any) =>
							Number(response[idx - 1]),
						),
					};
					return <PieChartForSelect data={data} />;
				}
				return <></>;

				// if (question.qType === "select") {
				// 	const questionData =
				// 	{
				// 		qType: question.qType
				// 		title: question.title,
				// 		options: question.options,
				// 		responses: question.responses.map(response => Number(response[idx - 1]))
				// 	};
				// 	<PieChartForSelect data={questionData} />
				// }
			})}
		</>
	);
}
