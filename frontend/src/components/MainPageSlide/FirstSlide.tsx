import React, { useRef, Suspense } from "react";
import styled from "styled-components";
import { Html, useGLTFLoader } from "drei";
import { Canvas, useFrame } from "react-three-fiber";

function Model() {
	const gltf = useGLTFLoader("/scene.gltf", true);
	return <primitive object={gltf.scene} dispose={null} />;
}

const Lights = () => {
	return (
		<>
			<ambientLight intensity={0.3} />
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<directionalLight
				castShadow
				position={[0, 10, 0]}
				intensity={1.5}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>
			<spotLight intensity={1} position={[1000, 0, 0]} castShadow />
		</>
	);
};

const HTMLContent = () => {
	const ref = useRef<THREE.Mesh>();
	useFrame(() => {
		if (ref.current !== undefined) {
			ref.current.rotation.y += 0.01;
		}
	});
	return (
		<>
			<mesh ref={ref} scale={[0.15, 0.15, 0.15]} position={[0, -5, 0]}>
				<Model />
			</mesh>
			<Html fullscreen>
				<TitleWrapper>
					<Title>
						<span>새로운</span>
						<span>설문조사의</span>
						<span>패러다임</span>
					</Title>
				</TitleWrapper>
			</Html>
		</>
	);
};

export default function FirstSlide() {
	return (
		<>
			<Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
				<Lights />
				<Suspense fallback={null}>
					<HTMLContent />
				</Suspense>
			</Canvas>
		</>
	);
}

const TitleWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 10rem;
	text-align: center;
	color: #fff;
	line-height: 130px;
	span {
		display: block;
	}
`;
