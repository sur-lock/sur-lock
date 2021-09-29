import React from "react";
import styled from "styled-components";

export function SecondSlide() {
	return (
		<Wrapper>
			<Title>
				<div>
					<p>WE DO</p>
				</div>
				<div>
					<p className="textCenter">
						블록체인을 통해 설문조사의
						<br /> 새로운 패러다임을 제시합니다.
					</p>
				</div>
			</Title>
			<Circles>
				<Circle>
					<p>신뢰성</p>
					<p>블록체인을 기반으로 한 저희 플랫폼은 조작이 불가합니다.</p>
				</Circle>
				<Circle>
					<p>공개성</p>
					<p>모두가 설문조사의 과정을 지켜볼 수 있습니다.</p>
				</Circle>
				<Circle>
					<p>영원성</p>
					<p>수행된 설문조사의 내용과 결과는 사라지지 않습니다.</p>
				</Circle>
				<Circle>
					<p>접근성</p>
					<p>누구나 쉽게 설문조사를 작성할 수 있습니다.</p>
				</Circle>
			</Circles>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: -10vh;
`;

const Title = styled.div`
	margin: 100px;
	${({ theme: { display } }) => display.flexRow("space-between")}
	color: ${({ theme: { colors } }) => colors.secondary};
	.textCenter {
		font-size: ${({ theme: { fonts } }) => fonts.size.xl};
		text-align: left;
		line-height: 1.5;
	}
`;

const Circles = styled.div`
	display: flex;
`;

const Circle = styled.div`
	font-size: ${({ theme: { fonts } }) => fonts.size.lg};
	font-weight: ${({ theme: { fonts } }) => fonts.weight.bold};
	border: 5px solid ${({ theme: { colors } }) => colors.primary};
	color: ${({ theme: { colors } }) => colors.secondary};
	width: 246px;
	height: 246px;
	margin: 0 20px;
	padding: 10px;
	border-radius: 50%;

	p:nth-child(1) {
		margin-top: 100px;
		transition: all 1s;
	}

	p:nth-child(2) {
		visibility: hidden;
		opacity: 0;
		margin-top: -50px;
		line-height: 1.5;
		transition: all 1s;
	}

	:hover {
		background-color: ${({ theme: { colors } }) => colors.primary};
		p:nth-child(1) {
			transform: translateY(-170px);
			font-size: ${({ theme: { fonts } }) => fonts.size.xl};
		}
		p:nth-child(2) {
			visibility: visible;
			opacity: 1;
		}
	}
`;
