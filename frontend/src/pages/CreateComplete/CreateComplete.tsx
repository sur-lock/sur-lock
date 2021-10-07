import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Card } from "antd";
import "react-tiny-fab/dist/styles.css";

interface LocationState {
	SurveyURL: string;
}

export function CreateComplete() {
	const location = useLocation<LocationState>();

	console.log(location.state.SurveyURL);

	return (
		<SurveyForm>
			<Label>설문생성이 완료되었습니다!</Label>
			<br />
			<br />
			<br />
			<br />
			<Link to={location.state.SurveyURL}>{location.state.SurveyURL}</Link>
		</SurveyForm>
	);
}

const SurveyForm = styled(Card)`
	width: 60%;
	left: 20%;
	text-align: center;
	padding: 20px;
	margin: 20px;
	background-color: ${({ theme: { colors } }) => colors.tertiary};
	color: ${({ theme: { colors } }) => colors.secondary};
	border-color: ${({ theme: { colors } }) => colors.tertiary};
`;

const Label = styled.h1`
	position: relative;
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;

const Anchor = styled.a`
	position: relative;
	font-size: 2rem;
	float: left;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.secondary};
`;
