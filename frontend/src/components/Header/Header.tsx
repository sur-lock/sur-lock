import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeToggle } from "../ThemeToggle";

interface HeaderProps {
	switchTheme: () => void;
}

export function Header({ switchTheme }: HeaderProps) {
	return (
		<Wrapper>
			<div className="header-inner">
				<Link to="/">
					<div className="logo">설록.</div>
				</Link>
				<nav>
					<ul>
						<li>
							<Link to="/create">설문생성</Link>
						</li>
						<li>
							<Link to="/response">응답하기</Link>
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
