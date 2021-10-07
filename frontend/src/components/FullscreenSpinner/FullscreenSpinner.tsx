import React from "react";
import styled from "styled-components";
import { Typography, Spin } from "antd";

const { Title } = Typography;

export function FullscreenSpinner() {
	return (
		<Wrapper>
			<Spin size="large" />
			<span className="loadingContent">
				지금, 투명한 설문을 블록에 담고 있어요!
			</span>
			<span className="loadingContent">
				전세계의 블록체인에 기록되기 위해 잠시만 기다려주세요.
			</span>
			<span className="loadingContent">
				이 과정은 약 <span className="bold">15초에서 30초</span> 소요됩니다.
			</span>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgb(0 0 0 / 60%);
	z-index: 9999;
	flex-direction: column;

	.loadingContent {
		color: white;
		font-size: 30px;
		font-weight: 500;
		margin-top: 40px;
	}

	.bold {
		font-weight: 600;
	}
`;
