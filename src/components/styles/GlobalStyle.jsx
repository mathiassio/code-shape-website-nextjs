import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themes.light.backgroundColor};
    color: black;
    
    @media (prefers-color-scheme: dark) {
    background-color: ${themes.dark.backgroundColor};
    color: white;
    }
  }
`
