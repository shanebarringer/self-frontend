/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FormInput = ({
  val,
  submit,
  labelText,
  name,
  formBase,
  handleFormUpdate
}) => {
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
        css={[formBase, inputBase, err ? error : ""]}
        style={{ background: val.length ? "#fff" : "" }}
        onChange={handleFormUpdate}
      />
    </div>
  );
};

const colors = {
  border: "#00ADEE",
  label: "#666666",
  idle: "#F7F7F7",
  err: "#E70000"
};

const inputBase = css`
  background-color: ${colors.idle};
  color: ${colors.label};
  border: 1px solid ${colors.idle};
  &:focus {
    outline: 0;
    border: 1px solid ${colors.border};
    background-color: #fff;
  }
`;

const error = css`
  border: 1px solid ${colors.err};
  background-color: #fff;
`;

const errorText = css`
  ::after {
    content: " REQUIRED";
    color: ${colors.err};
  }
`;

export default FormInput;
