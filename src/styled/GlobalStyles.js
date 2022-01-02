import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

html[data-theme="light"] {
  --root-primary: white;
  --invert-primary: black;
  --primary: #8629D0;
  --on-primary: #FEFEFF;
  --secondary: #f5f6ff;
  --on-secondary: #000C61;
  --main-bg: #FEFEFF;
  --tagline-color: #4C4D53;
  --theme-icons-url: url("dark_mode.svg");
  --footer-bg: #F6F7F6;
  --footer-border: #e6e9ee;
  --error-response: #4C4D53;
  --input-border: #dbdbdb;
  --seperator: #CFD9DE;
}

html[data-theme="dark"] {
  --root-primary: black;
  --invert-primary: white;
  --primary: #E0B6FF;
  --on-primary: #4A007F;
  --secondary: #252f3b;
  --on-secondary: #DDE0FF;
  --main-bg: #1F2028;
  --tagline-color: #DBDBDB;
  --theme-icons-url: url("light_mode.svg");
  --footer-bg: #2E3138;
  --footer-border: #4b4c53;
  --error-response: #CACCD9;
  --input-border: #5b5b5b;
  --seperator: #3e4b55;
} 

body {
  min-height: 100vh;

  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;

  background-color: var(--main-bg);
  color: var(--invert-primary);

  box-sizing: border-box;
  text-decoration: none;

  overflow-y: visible;
}

button,
a,
p {
  font-family: 'Poppins', sans-serif;
}

a{
  text-decoration: none;
  color: black;
}

ul{
  list-style-type: none;
}

input{
  font-size: 1.8rem;
  font-family: inherit;
}

textarea{
  font-family: inherit;
}

label{
  font-size: 1.6rem;
}

svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
}

button:hover{
  opacity: 0.8;
}
`

export const UnderLine = `
position: relative;
outline: none;

&::after {
  content: "";
  bottom: -4px;
  transform: scaleX(0);
  transition: transform 0.25s ease;
  transform-origin: left;
  left: 0;
  height: 2px;
  width: 100%;
  display: block;
  position: absolute;
}

&:hover,
&:focus {
  &::after {
    background-color: var(--invert-primary);
    transform: scaleX(1);
  }
}`
