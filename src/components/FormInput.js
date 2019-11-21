/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const colors = {
  label: "#666666",
  input: "#OOADEE",
  idle: "#F7F7F7",
  err: "#E70000"
};

const error = css`
  border: 1px solid ${colors.err};
`;

const errorText = css`
  ::after {
    content: " REQUIRED";
    color: ${colors.err};
  }
`;

const FormInput = ({ val, submit, labelText, name, handleFormUpdate }) => {
  const err = submit && !val.length;

  return (
    <div>
      <label htmlFor={name} css={err ? errorText : ""}>
        {labelText.toUpperCase()}
      </label>
      <br />
      <input
        type="text"
        name={name}
        value={val}
        css={err ? error : ""}
        onChange={handleFormUpdate}
      />
    </div>
  );
};

export default FormInput;
