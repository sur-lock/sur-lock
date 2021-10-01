import React, { useState } from "react";
import styled from "styled-components";
import {
	CheckOutlined,
	FileAddOutlined,
	ProfileOutlined,
	PictureOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import { ResponseOption } from "components";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const sampleData = {
	address: "",
	startDate: "",
	endDate: "",
	title: "설문샘플",
	discription: "샘플입니다",
	questions: [
		{ qType: 0, title: "", options: [""], imgs: [""] },
		{
			qType: 1,
			title: "객관식1",
			options: ["1", "2", "3", "4"],
			imgs: [""],
		},
		{
			qType: 2,
			title: "객관식2",
			options: [""],
			imgs: [
				"blob:http://localhost:3000/cdb3db3a-22b0-4f6e-81ee-c714d696e2b9",
				"blob:http://localhost:3000/4bc22b92-6b5f-430a-8a2e-cd63250ce261",
				"blob:http://localhost:3000/12eb53af-9348-48b0-ae59-24273f8e1e32",
			],
		},
		{ qType: 3, title: "주관식3", options: ["샘플주관식"], imgs: [""] },
		{
			qType: 4,
			title: "주관식4",
			options: [""],
			imgs: ["blob:http://localhost:3000/12eb53af-9348-48b0-ae59-24273f8e1e32"],
		},
	],
};

export function ResponseSurvey() {
	const getDatafromChild = (index: number, val: any) => {
		console.log(val);
	};
	return (
		<CardContainer>
			<Title>설문조사 응답</Title>
			<ResponseOption
				title={sampleData.questions[1].title}
				options={sampleData.questions[1].options}
				QuestionIdx={1}
				sendData={getDatafromChild}
			/>
		</CardContainer>
	);
}

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	coler: #fff;
	span {
		display: block;
	}
`;

const CardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	text-align: center;
	background: ${({ theme: { colors } }) => colors.phantomBlue};
	font-size: ${({ theme: { fonts } }) => fonts.size.title};
	${({ theme: { display } }) => display.flexCol()}
`;

const Title = styled.h1`
	font-size: 10rem;
	text-align: center;
	color: #fff;
	line-height: 130px;
	span {
		display: block;
	}
`;
