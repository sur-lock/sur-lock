import { createGlobalStyle, css } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    text-decoration: none;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%; // 1rem = 10px;
  }

  ${({ theme }) => {
		return css`
			body {
				font-family: ${theme.fonts.family.base};
				font-weight: ${theme.fonts.weight.normal};
				font-size: ${theme.fonts.size.base};
				background-color: ${theme.colors.phantomBlue};
				input {
					background-color: transparent;
					border: none;
					border-bottom: 1px solid black;
				}
			}
		`;
	}}
  
  button {
    all: unset;
    cursor: pointer;
  }
`;
