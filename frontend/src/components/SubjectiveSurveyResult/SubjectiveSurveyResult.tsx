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
			{title}
			{responses.map(response => (
				<div>{response}</div>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.div``;
