import { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Rodal from "rodal";
import FormInput from "./FormInput";
import Dialog from "./Dialog";
import arrow from "../images/White_Arrow.svg";
import "rodal/lib/rodal.css";

const initialData = {
  firstName: "",
  lastName: "",
  address: "",
  addressTwo: "",
  submit: false
};

const Form = () => {
  const [data, updateData] = useState(initialData);
  const [dialog, toggleDialog] = useState(false);

  const handleFormUpdate = e => {
    updateData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const valueSlice = Object.values(data).slice(0, -2);

    const notEmpty = valueSlice.every(val => val.length);

    data.submit && notEmpty
      ? toggleDialog(true)
      : updateData({ ...data, submit: true });
  };

  const successHandler = e => {
    e.preventDefault();
    updateData({ ...initialData });
    toggleDialog(false);
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

      <button type="submit" css={[formBase, buttonBase, formButton]}>
        Next <img src={arrow} alt="arrow" />
      </button>
      <Rodal visible={dialog} onClose={successHandler}>
        <Dialog
          firstName={firstName}
          lastName={lastName}
          address={address}
          addressTwo={addressTwo}
          successHandler={successHandler}
          buttonBase={buttonBase}
          modalButton={modalButton}
          toggleDialog={toggleDialog}
        />
      </Rodal>
    </form>
  );
};

const formBase = css`
  font: 14px Roboto;
  margin: 12px;
  padding-left: 16px;
  width: 80%;
  height: 48px;
  border-radius: 6px;
`;

const buttonBase = css`
  background: #FFAB44;
  margin-top: 22px;
  font-size 16px;
  color: #fff;
  border: none;
  outline: none;
`;

const formButton = css`
  margin-top: 48px;
  font-size 16px;
  font-weight: 700;
   @media (min-width: 1200px) {
    width: initial;
    padding: 0 24px;
    display: inline-block;
  }
`;

const modalButton = css`
  margin-left: 22px;
`;

export default Form;
