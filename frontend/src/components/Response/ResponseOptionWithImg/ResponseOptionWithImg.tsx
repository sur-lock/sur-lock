import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import {
	Card,
	Form,
	Input,
	Image,
	Radio,
	Space,
	Button,
	RadioChangeEvent,
} from "antd";

interface questionData {
	QuestionIdx: number;
	title: string;
	imgs: string[];
	sendData: (idx: number, data: any) => void;
}

export function ResponseOptionWithImg({
	QuestionIdx,
	title,
	imgs,
	sendData,
}: questionData) {
	const [Answer, setAnswer] = useState(0);

	const onOptionChangeHandler = (e: RadioChangeEvent) => {
		setAnswer(e.target.value);
		sendData(QuestionIdx, e.target.value);
	};

	const renderOptions = () => {
		const imgCount = imgs.length;
		const result = [];
		for (let i = 0; i < imgCount; i += 1) {
			result.push(
				<Radio value={i} onChange={onOptionChangeHandler}>
					<Image
						height="100px"
						width="100px"
						src={`http://j5a501.p.ssafy.io:8080/images/${imgs[i]}`}
					/>
				</Radio>,
			);
		}
		return result;
	};
	return (
		<SurveyForm>
			<Form layout="vertical" autoComplete="off" size="large">
				<FormWrapper style={{ overflow: "hidden" }}>
					<Form.Item name="SurveyTitle">
						<Label>{title}</Label>
						<br />
						<br />
						<br />
						<Radio.Group>{renderOptions()}</Radio.Group>
					</Form.Item>
				</FormWrapper>
			</Form>
		</SurveyForm>
	);
}

const ImageContainer = styled(Image)`
	width: 35%;
	height: 35%;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Label = styled.h1`
	font-size: 3rem;
	float: left;
	margin-bottom: 10px;
	coler: #fff;
	span {
		display: block;
	}
`;
const FormWrapper = styled.div`
	font-size: 2rem;
`;

const SurveyForm = styled(Card)`
	width: 65%;
	padding: 20px;
	margin: 20px;
`;
