import React from "react";
import styled from "styled-components";

export function InducingScroll() {
	return (
		<Scroll>
			<span> </span>
		</Scroll>
	);
}

const Scroll = styled.div`
	padding-top: 60px;
	span {
		position: absolute;
		top: 90%;
		left: 50%;
		width: 30px;
		height: 50px;
		margin-left: -15px;
		border: 2px solid ${({ theme: { colors } }) => colors.secondary};
		border-radius: 50px;
	}
	span::before {
		position: absolute;
		top: 10px;
		left: 50%;
		content: "";
		width: 6px;
		height: 6px;
		margin-left: -3px;
		background-color: ${({ theme: { colors } }) => colors.secondary};
		border-radius: 100%;
		-webkit-animation: sdb 2s infinite;
		animation: sdb 2s infinite;
		box-sizing: border-box;
	}
	@-webkit-keyframes sdb {
		0% {
			-webkit-transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			-webkit-transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes sdb {
		0% {
			transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
`;
