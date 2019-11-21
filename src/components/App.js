/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Form from "./Form";

import Logo from "../images/GiantRobotLTD_Logo.svg";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
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
`;

export default App;
