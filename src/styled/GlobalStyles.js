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
  --primary-cnt: #F3DBFF;
  --on-primary-cnt: #2D0051;
  --secondary: #CEE4FE;
  --on-secondary: #011C34;
  --author-name: #5353B6;
  --work-exp-bg: hsl(235, 100%, 98%);
  --work-exp-main: #000C61;
  --main-bg: #FEFEFF;
  --main-invert-bg: #1F2028;
  --arrow-url: url("right_arrow_dark.svg");
  --tagline-color: #4C4D53;
  --theme-icons-url: url("dark_mode.svg");
  --footer-bg: #F6F7F6;
  --footer-border: #e6e9ee;
  --error-response: #4C4D53;
  --input-border: #dbdbdb;
  --line-border: lightgray;
}

html[data-theme="dark"] {
  --root-primary: black;
  --invert-primary: white;
  --primary: #E0B6FF;
  --on-primary: #4A007F;
  --primary-cnt: #6B00B3;
  --on-primary-cnt: #F3DBFF;
  --secondary: #004B78;
  --on-secondary: #CEE4FE;
  --author-name: #C1C0FE;
  --work-exp-bg: hsl(232,33%, 21%);
  --work-exp-main: #DDE0FF;
  --main-invert-bg: #FEFEFF;
  --main-bg: #1F2028;
  --tagline-color: #DBDBDB;
  --arrow-url: url("right_arrow_light.svg");
  --theme-icons-url: url("light_mode.svg");
  --footer-bg: #2E3138;
  --footer-border: #4b4c53;
  --error-response: #CACCD9;
  --input-border: #5b5b5b;
  --line-border: #45474E;
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

/* 














html[data-theme="light"] {
  --root-primary: white;
  --invert-primary: black;
  --author-name: #18248C;
  --main-bg: #FEFEFF;
  --main-invert-bg: #1F2028;
  --arrow-url: url("right_arrow_dark.svg");
  --tagline-color: #4C4D53;
  --theme-icons-url: url("dark_mode.svg");
  --footer-bg: #F6F7F6;
  --footer-border: #e6e9ee;
  --error-response: #4C4D53;
  --input-border: #dbdbdb;
}

html[data-theme="dark"] {
  --root-primary: black;
  --invert-primary: white;
  --author-name: #9595FF;
  --main-invert-bg: #FEFEFF;
  --main-bg: #1F2028;
  --tagline-color: #DBDBDB;
  --arrow-url: url("right_arrow_light.svg");
  --theme-icons-url: url("light_mode.svg");
  --footer-bg: #2E3138;
  --footer-border: #4b4c53;
  --error-response: #CACCD9;
  --input-border: #5b5b5b;
}







*/
