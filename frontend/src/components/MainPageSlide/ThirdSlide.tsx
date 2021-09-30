import React from "react";
import styled from "styled-components";
import { InducingScroll } from "components";
import {
	shinjoohwan,
	aftershinjoohwan,
	kimjoohyung,
	afterkimjoohyung,
	leechaeha,
	afterleechaeha,
	jangminho,
	afterjangminho,
	jangdongkyun,
	afterjangdongkyun,
} from "static/image";

export function ThirdSlide() {
	return (
		<Wrapper>
			<Title>
				<div>
					<p>WE ARE</p>
				</div>
				<div>
					<p className="textCenter">
						기존 설문조사의 문제를 해결하기 위해
						<br /> SSAFY 교육생 5명이 뭉쳤습니다.
					</p>
				</div>
			</Title>
			<Developers>
				<Developer>
					<div>
						<img src={leechaeha} alt="leechaeha" />
						<img src={afterleechaeha} alt="afterleechaeha" />
					</div>
					<Introduce>
						<p>팀장 BE</p>
						<p>이채하</p>
					</Introduce>
				</Developer>

				<Developer>
					<div>
						<img src={kimjoohyung} alt="kimjoohyung" />
						<img src={afterkimjoohyung} alt="afterkimjoohyung" />
					</div>
					<Introduce>
						<p>BlockChain</p>
						<p>김주형</p>
					</Introduce>
				</Developer>

				<Developer>
					<div>
						<img src={shinjoohwan} alt="shinjoohwan" />
						<img src={aftershinjoohwan} alt="aftershinjoohwan" />
					</div>
					<Introduce>
						<p>FE</p>
						<p>신주환</p>
					</Introduce>
				</Developer>

				<Developer>
					<div>
						<img src={jangdongkyun} alt="jangdongkyun" />
						<img src={afterjangdongkyun} alt="afterjangdongkyun" />
					</div>
					<Introduce>
						<p>FE</p>
						<p>장동균</p>
					</Introduce>
				</Developer>

				<Developer>
					<div>
						<img src={jangminho} alt="jangminho" />
						<img src={afterjangminho} alt="afterjangminho" />
					</div>
					<Introduce>
						<p>BE BlockChain</p>
						<p>장민호</p>
					</Introduce>
				</Developer>
			</Developers>
			<InducingScroll />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: -10vh;
`;

const Title = styled.div`
	margin: 100px 300px;
	${({ theme: { display } }) => display.flexRow("space-between")}
	color: ${({ theme: { colors } }) => colors.secondary};
	.textCenter {
		font-size: ${({ theme: { fonts } }) => fonts.size.xl};
		text-align: left;
		line-height: 1.5;
	}
`;

const Developers = styled.div`
	${({ theme: { display } }) => display.flexRow("space-between")}
`;

const Developer = styled.div`
	position: relative;

	img {
		width: 320px;
	}
	img:nth-child(2) {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		object-fit: contain;
		opacity: 0;
		transition: opacity 0.2s;
	}

	img:nth-child(2):hover {
		opacity: 1;
	}
`;

const Introduce = styled.div`
	color: ${({ theme: { colors } }) => colors.secondary};
	margin-top: 5px;
	line-height: 1.5;
	p:first-child {
		font-size: ${({ theme: { fonts } }) => fonts.size.lg};
	}
	p:last-child {
		font-weight: ${({ theme: { fonts } }) => fonts.weight.bold};
	}
`;
