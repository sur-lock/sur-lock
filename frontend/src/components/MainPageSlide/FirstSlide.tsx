import React from "react";
import styled from "styled-components";
import { writingman } from "static/image";
import { InducingScroll } from "components";

export function FirstSlide() {
	return (
		<Wrapper>
			<InducingScroll />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-image: url(${writingman});
	border: 1px solid #000;
	width: 100%;
	height: 100%;
	background-size: cover;
`;
