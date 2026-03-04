import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === "light" ? "#ffffff" : "#333333")};
    color: ${(props) => (props.theme === "light" ? "#333333" : "#ffffff")};
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;
