import React, { useState } from "react";
import FormInput from "./FormInput";

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
        handleFormUpdate={handleFormUpdate}
      />
      <FormInput
        val={lastName}
        name="lastName"
        submit={submit}
        labelText="Last Name"
        handleFormUpdate={handleFormUpdate}
      />
      <FormInput
        val={address}
        name="address"
        submit={submit}
        labelText="Address"
        handleFormUpdate={handleFormUpdate}
      />
      <FormInput
        val={addressTwo}
        name="addressTwo"
        submit={false}
        labelText="Address 2 (optional)"
        handleFormUpdate={handleFormUpdate}
      />

      <button type="submit">Next</button>
    </form>
  );
};

export default Form;
