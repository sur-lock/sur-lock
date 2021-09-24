import React from "react";
import styled from "styled-components";
import { ThemeToggle } from "../ThemeToggle";

interface HeaderProps {
	switchTheme: () => void;
}

export function Header({ switchTheme }: HeaderProps) {
	return (
		<Wrapper>
			<div className="header-inner">
				<div className="logo">설록.</div>
				<nav>
					<ul>
						<li>
							<a href="/create">설문생성</a>
						</li>
						<li>
							<a href="/">응답하기</a>
						</li>
						<li>
							<ThemeToggle switchTheme={switchTheme} />
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
			font-size: ${({ theme: { fonts } }) => fonts.size.base};
			letter-spacing: 2px;
			color: ${({ theme: { colors } }) => colors.secondary};
		}
		nav {
			ul {
				display: flex;
				font-size: ${({ theme: { fonts } }) => fonts.size.sm};
				li {
					list-style: none;
					margin: 0 ${({ theme: { margins } }) => margins.xl};
					&.btn {
						a {
							border: 1px solid ${({ theme: { colors } }) => colors.secondary};
							padding: ${({ theme: { paddings } }) => paddings.base};
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
