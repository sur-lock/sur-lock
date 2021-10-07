import React from "react";
import styled from "styled-components";

interface SubjectiveSurveyResultProps {
	title: string;
	responses: string[];
}

export function SubjectiveSurveyResult({
	title,
	responses,
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
