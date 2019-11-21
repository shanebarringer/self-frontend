import { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import FormInput from "./FormInput";
import arrow from "../images/White_Arrow.svg";

const initialData = {
  firstName: "",
  lastName: "",
  address: "",
  addressTwo: "",
  submit: false
};

const Form = () => {
  const [data, updateData] = useState(initialData);

  const handleFormUpdate = e => {
    updateData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const valueSlice = Object.values(data).slice(0, -2);

    const notEmpty = valueSlice.every(val => val.length);

    data.submit && notEmpty
      ? updateData({ ...initialData })
      : updateData({ ...data, submit: true });
  };

  const { firstName, lastName, address, addressTwo, submit } = data;

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        val={firstName}
        name="firstName"
        submit={submit}
        labelText="First Name"
        formBase={formBase}
        handleFormUpdate={handleFormUpdate}
      />
      <FormInput
        val={lastName}
        name="lastName"
        submit={submit}
        labelText="Last Name"
        formBase={formBase}
        handleFormUpdate={handleFormUpdate}
      />
      <FormInput
        val={address}
        name="address"
        submit={submit}
        labelText="Address"
        formBase={formBase}
        handleFormUpdate={handleFormUpdate}
      />
      <FormInput
        val={addressTwo}
        name="addressTwo"
        submit={false}
        labelText="Address 2 (optional)"
        formBase={formBase}
        handleFormUpdate={handleFormUpdate}
      />

      <button type="submit" css={[formBase, buttonStyle]}>
        Next <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
};

const formBase = css`
  font: 14px Roboto;
  margin: 12px auto;
  padding-left: 16px;
  width: 80%;
  height: 48px;
  border-radius: 6px;
`;

const buttonStyle = css`
  background: #FFAB44;
  margin-top: 48px;
  color: #fff;
  font-size 16px;
  font-weight: 700;
  border: none;
  outline: none;
   @media (min-width: 1200px) {
    width: initial;
    padding: 0 24px;
    display: inline-block;
  }
`;

export default Form;
