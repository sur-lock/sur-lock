import { FlattenSimpleInterpolation } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		margins: {
			sm: string;
			base: string;
			lg: string;
			xl: string;
		};
		paddings: {
			sm: string;
			base: string;
			lg: string;
			xl: string;
		};
		fonts: {
			family: {
				base: string;
				title: string;
			};
			size: {
				sm: string;
				base: string;
				lg: string;
				xl: string;
				title: string;
			};
			weight: {
				light: number;
				normal: number;
				bold: number;
			};
		};
		device: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
		display: {
			flexCol: (
				justifyContent?: string,
				alignItems?: string,
			) => FlattenSimpleInterpolation;
			flexRow: (
				justifyContent?: string,
				alignItems?: string,
			) => FlattenSimpleInterpolation;
		};
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;
			red: string;
			blue: string;
			yellow: string;
			phantomBlue: string;
		};
	}
}
