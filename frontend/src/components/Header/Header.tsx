import React from "react";
import styled from "styled-components";

export default function Header() {
	return (
		<Wrapper>
			<div className="header-inner">
				<div className="logo">설록.</div>
				<nav>
					<ul>
						<li>
							<a href="/">설문생성</a>
						</li>
						<li>
							<a href="/">응답하기</a>
						</li>
						<li>
							<a href="/">테마 토글</a>
						</li>
						<li className="btn">
							<a href="/">로그인</a>
						</li>
					</ul>
				</nav>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	position: absolute;
	z-index: 99;
	width: 100%;
	padding: 60px;
	.header-inner {
		${({ theme: { display } }) => display.flexRow("space-between")}
		.logo {
			font-size: ${({ theme: { fonts } }) => fonts.size.lg};
			letter-spacing: 2px;
			color: ${({ theme: { colors } }) => colors.secondary};
		}
		nav {
			ul {
				margin: 0;
				padding: 0;
				display: flex;
				li {
					list-style: none;
					margin: 0 60px;
					margin: 0 ${({ theme: { margins } }) => margins.xl};
					&.btn {
						a {
							background: ${({ theme: { colors } }) => colors.primary};
							color: ${({ theme: { colors } }) => colors.secondary};
							font-weight: ${({ theme: { fonts } }) => fonts.weight.bold};
							padding: ${({ theme: { paddings } }) => paddings.lg};
							border-radius: 10px;
						}
					}
					a {
						text-transform: capitalize;
						text-decoration: none;
						color: ${({ theme: { colors } }) => colors.secondary};
					}
				}
			}
		}
	}
`;
