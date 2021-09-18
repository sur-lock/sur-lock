import React from "react";
import styled from "styled-components";

export default function FirstSlide() {
	return (
		<>
			<Main>설록</Main>
		</>
	);
}

const Main = styled.h1`
	color: ${({ theme: { colors } }) => colors.secondary};
`;
