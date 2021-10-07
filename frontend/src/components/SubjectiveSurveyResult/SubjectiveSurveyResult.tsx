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
		<Wrapper>
			<h1>{title}</h1>
			{responses.map(response => (
				<Result>{response}</Result>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.div``;

const Result = styled.div`
	margin-top: 5px;
	font-size: 2rem;
	border: 1px solid ${({ theme: { colors } }) => colors.secondary};
	padding: 5px;
`;
