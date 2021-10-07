import React from "react";
import styled from "styled-components";

interface SubjectiveSurveyResultProps {
	data: {
		title: string;
		responses: string[];
	};
}

export function SubjectiveSurveyResult({
	data: { title, responses },
}: SubjectiveSurveyResultProps) {
	return (
		<div>
			<Title>{title}</Title>
			<div>
				{responses.map(response => (
					<Result>{response}</Result>
				))}
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
				<Result>ssssssssssssssss</Result>
			</div>
		</div>
	);
}

const Title = styled.div`
	font-size: 3rem;
	font-weight: 900;
	position: relative;
	left: -150px;
	margin-bottom: 30px;
`;

const Result = styled.div`
	margin-top: 5px;
	font-size: 2rem;
	color: white;
	background-color: #00aaaa;
	border-radius: 15px;
	padding: 20px;
	margin-bottom: 50px;
	overflow: hidden;
`;
