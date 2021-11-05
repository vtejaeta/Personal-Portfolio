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
