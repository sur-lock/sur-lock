import React from "react";
import styled from "styled-components";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ThemeToggleProps {
	switchTheme: () => void;
}

export function ThemeToggle({ switchTheme }: ThemeToggleProps) {
	const handleClick = () => {
		switchTheme();
	};

	return (
		<Wrapper>
			{localStorage.getItem("theme") === "darkTheme" ? (
				<Input
					type="checkbox"
					onClick={handleClick}
					className="checkbox"
					id="checkbox"
					checked
				/>
			) : (
				<Input
					type="checkbox"
					onClick={handleClick}
					className="checkbox"
					id="checkbox"
				/>
			)}
			<CustomLabel htmlFor="checkbox" className="label">
				<FontAwesomeIcon className="faSun" icon={faSun} />
				<FontAwesomeIcon className="faMoon" icon={faMoon} />
				<Ball className="ball" />
			</CustomLabel>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	// margin-top: -6px;
`;

const Input = styled.input`
	display: none;
	position: absolute;
	:checked + label .ball {
		transform: translateX(24px);
	}
`;

const CustomLabel = styled.label`
	width: 50px;
	height: 26px;
	position: relative;
	background-color: ${({ theme: { colors } }) => colors.secondary};
	${({ theme: { display } }) => display.flexRow("space-between", "center")}
	padding: ${({ theme: { paddings } }) => paddings.sm};
	border-radius: 50px;

	.faMoon {
		color: #f1c40f;
	}

	.faSun {
		color: #f39c12;
	}
`;

const Ball = styled.div`
	background-color: ${({ theme: { colors } }) => colors.primary};
	position: absolute;
	width: 22px;
	height: 22px;
	top: 2px;
	left: 2px;
	border-radius: 50%;
	transition: transform 0.2s linear;
`;
