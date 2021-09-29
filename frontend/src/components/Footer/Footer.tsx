import React from "react";
import styled from "styled-components";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
	return (
		<Wrapper>
			<About>
				<h4>About Us</h4>
				<p>
					블록체인을 기반으로한 설문조사 플랫폼입니다.
					<br />
					SSAFY 5기의 5명의 개발자들이 뭉쳐 개발하였습니다.
				</p>
				<FontAwesomeIcon className="faGithubSquare" icon={faGithubSquare} />
			</About>
			<Links>
				<h4>Quick Links</h4>
				<ul>
					<li>설문생성</li>
					<li>응답하기</li>
				</ul>
			</Links>
			<Contact>
				<h4>Contact Us</h4>
				<ul>
					<li>
						<FontAwesomeIcon className="faMapMarkerAlt" icon={faMapMarkerAlt} />{" "}
						대한민국,서울특별시
					</li>
					<li>
						<FontAwesomeIcon className="faEnvelope" icon={faEnvelope} />{" "}
						팀장@email.com
					</li>
				</ul>
			</Contact>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	padding: 100px;
	${({ theme: { display } }) => display.flexRow("space-between")};
	flex-wrap: wrap;
`;

const About = styled.div`
	width: 30%;
	margin-top: 62px;
	${({ theme: { display } }) => display.flexCol()};

	h4 {
		position: relative;
		margin-bottom: 50px;
		color: ${({ theme: { colors } }) => colors.secondary};
	}

	h4:before {
		content: "";
		position: absolute;
		bottom: -20px;
		width: 250px;
		height: 5px;
		background: #f00;
	}

	p {
		font-size: ${({ theme: { fonts } }) => fonts.size.lg};
		text-align: center;
		line-height: 1.5;
	}

	.faGithubSquare {
		margin-top: 12px;
		font-size: ${({ theme: { fonts } }) => fonts.size.title};
	}
`;

const Links = styled.div`
	width: 30%;
	${({ theme: { display } }) => display.flexCol("space-between")};

	h4 {
		position: relative;
		margin-bottom: 50px;
		color: ${({ theme: { colors } }) => colors.secondary};
	}

	h4:before {
		content: "";
		position: absolute;
		bottom: -20px;
		width: 310px;
		height: 5px;
		background: #f00;
	}

	li {
		font-size: ${({ theme: { fonts } }) => fonts.size.lg};
		line-height: 1.5;
	}
`;

const Contact = styled.div`
	width: 30%;
	${({ theme: { display } }) => display.flexCol("space-between")};

	h4 {
		position: relative;
		margin-bottom: 50px;
		color: ${({ theme: { colors } }) => colors.secondary};
	}

	h4:before {
		content: "";
		position: absolute;
		bottom: -20px;
		width: 310px;
		height: 5px;
		background: #f00;
	}

	li {
		font-size: ${({ theme: { fonts } }) => fonts.size.lg};
		line-height: 1.5;
	}
`;
