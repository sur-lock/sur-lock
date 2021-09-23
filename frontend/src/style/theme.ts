import { css, DefaultTheme } from "styled-components";

// 출처: https://dkje.github.io/2020/10/13/StyledComponents/
const size = {
	mobile: "425px",
	tablet: "768px",
	desktop: "1440px",
};

const colors = {
	red: "#ff4d4d",
	yellow: "#ffff4d",
	blue: "#0099ff",
	phantomBlue: "#35558a",
};

const lightThemeColors = {
	...colors,
	primary: "#ffffff",
	secondary: "#000000",
	tertiary: "#808080",
};

const darkThemeColors = {
	...colors,
	primary: "#000000",
	secondary: "#ffffff",
	tertiary: "#808080",
};

const defalutTheme = {
	margins: {
		sm: ".5rem",
		base: "1rem",
		lg: "2rem",
		xl: "3rem",
	},

	paddings: {
		sm: ".5rem",
		base: "1rem",
		lg: "2rem",
		xl: "3rem",
	},

	fonts: {
		family: {
			base: `'Noto Sans KR', sans-serif`,
			title: `'Merriweather', serif`,
		},
		size: {
			sm: "1.4rem",
			base: "1.6rem",
			lg: "2rem",
			xl: "2.5rem",
			title: "6rem",
		},
		weight: {
			light: 100,
			normal: 400,
			bold: 700,
		},
	},

	device: {
		mobile: `@media only screen and (max-width: ${size.mobile})`,
		tablet: `@media only screen and (max-width: ${size.tablet})`,
		desktop: `@media only screen and (max-width: ${size.desktop})`,
	},

	display: {
		flexCol: (justifyContent = "center", alignItems = "center") => css`
			display: flex;
			flex-direction: column;
			justify-content: ${justifyContent};
			align-items: ${alignItems};
		`,
		flexRow: (justifyContent = "center", alignItems = "center") => css`
			display: flex;
			flex-direction: row;
			justify-content: ${justifyContent};
			align-items: ${alignItems};
		`,
	},
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
export const darkTheme: DefaultTheme = {
	...defalutTheme,
	colors: darkThemeColors,
};

export const lightTheme: DefaultTheme = {
	...defalutTheme,
	colors: lightThemeColors,
};
