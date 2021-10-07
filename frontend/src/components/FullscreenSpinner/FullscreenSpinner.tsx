import React from "react";
import styled from "styled-components";
import { Typography, Spin } from "antd";

const { Title } = Typography;

export function FullscreenSpinner() {
	return (
		<Wrapper>
			<Spin size="large" />
			<span className="loadingContent">
				설문조사를 생성하거나, 응답을 제출하는 것은
			</span>
			<span className="loadingContent">
				<span className="bold">약 10초에서 2분</span>이 소요됩니다.
			</span>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
  background-color;
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
