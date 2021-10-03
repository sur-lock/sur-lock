import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, setUser } from "store";
import { ThemeToggle } from "../ThemeToggle";

interface HeaderProps {
	switchTheme: () => void;
}

interface KakaoLogin {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	refresh_token_expires_in: number;
	token_type: string;
}

interface UserInfo {
	id: number;
	connected_at: string;
	kakao_account: {
		profile: {
			nickname: string;
		};
		profile_nickname_needs_agreement: boolean;
	};
	properties: { nickname: string };
}

declare global {
	interface Window {
		Kakao: any;
	}
}

const { Kakao } = window;

export function Header({ switchTheme }: HeaderProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
	}, []);

	const handleLogin = () => {
		Kakao.Auth.login({
			success: ({ access_token }: KakaoLogin) => {
				Kakao.Auth.setAccessToken(access_token);
				Kakao.API.request({
					url: "/v2/user/me",
					success: ({ id, properties: { nickname } }: UserInfo) => {
						dispatch(setUser({ id, name: nickname }));
					},
				});
			},
			fail: (err: any) => {
				console.error(err);
			},
		});
	};

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
							<a href="/">응답하기</a>
						</li>
						<li>
							<ThemeToggle switchTheme={switchTheme} />
						</li>
					</ul>
					<button onClick={handleLogin} type="submit">
						로그인
					</button>
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
			${({ theme: { display } }) => display.flexRow("space-between")}
			ul {
				display: flex;
				font-size: ${({ theme: { fonts } }) => fonts.size.sm};
				li {
					list-style: none;
					margin: 0 ${({ theme: { margins } }) => margins.xl};

					a {
						text-transform: capitalize;
						text-decoration: none;
						color: ${({ theme: { colors } }) => colors.secondary};
					}
				}
			}
			button {
				color: ${({ theme: { colors } }) => colors.secondary};
				border: 1px solid ${({ theme: { colors } }) => colors.secondary};
				padding: ${({ theme: { paddings } }) => paddings.base};
				border-radius: 10px;
				margin-top: -10px;
			}
		}
	}
`;
