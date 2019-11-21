/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Form from "./Form";

import Logo from "../images/GiantRobotLTD_Logo.svg";
import "../styles/App.css";

function App() {
  return (
    <div>
      <div css={welcome}>
        <img css={imageStyle} src={Logo} alt="Giant Robot LTD logo" />
        <h1>Welcome</h1>
        <p>Please tell us a bit about yourself to get started</p>
      </div>
      <div css={formStyle}>
        <Form />
      </div>
    </div>
  );
}

const desktop = 1200;

const welcome = css`
  background-color: #585858;
  font-size: 14px;
  color: #ffffff;
  padding: 2em;
  h1 {
    font-size: 24px;
    font-weight: 700;
    font-family: Roboto, sans-serif;
  }
  @media (min-width: ${desktop}px) {
    height: 100vh;
    width: 58%;
    display: inline-block;
    float: left;
  }
`;

const imageStyle = css`
  margin: 32px auto;
  height: 26px;
  width: 177px;
`;

const formStyle = css`
  margin: 32px auto;
  margin-left: 10%;
  margin-right: auto;
  @media (min-width: ${desktop}px) {
    width: 38%;
    margin 114px auto;
    padding: 24px;
    display: inline-block;
  }
`;

export default App;
