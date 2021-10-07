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
	font-size: 2rem;
	border: 1px solid ${({ theme: { colors } }) => colors.secondary};
`;
