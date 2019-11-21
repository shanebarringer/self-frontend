import Form from "./Form";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div css={welcome}>
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

const formStyle = css`
  margin: 12px auto;
  margin-left: 10%;
  margin-right: auto;
`;

export default App;
