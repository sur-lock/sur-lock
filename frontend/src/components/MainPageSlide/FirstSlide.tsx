import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { writingman, background } from "static/image";
import { InducingScroll } from "components";

export function FirstSlide() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const setFromEvent = (e: MouseEvent) => {
			e.preventDefault();
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", setFromEvent);
		return () => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

	return (
		<Wrapper>
			<Hole className="hole" positionX={position.x} positionY={position.y} />
			<InducingScroll />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-image: url(${writingman});
	border: 1px solid #000;
	width: 100%;
	height: 100%;
	background-size: cover;
	position: relative;
`;

const Hole = styled.div<{ positionX: number; positionY: number }>`
	width: 400px;
	height: 400px;
	position: absolute;
	top: ${props => props.positionY - 200}px;
	left: ${props => props.positionX - 200}px;
	border-radius: 50%;
	background: url(${background});
	background-size: contain;
	background-attachment: fixed;
	background-position: center;
	box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.2);
`;
