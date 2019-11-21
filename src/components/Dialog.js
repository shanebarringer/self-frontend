/** @jsx jsx */
import { jsx } from "@emotion/core";

const Dialog = ({
  firstName,
  lastName,
  address,
  addressTwo,
  successHandler,
  buttonBase,
  modalButton,
  toggleDialog
}) => (
  <div>
    <h3>Thanks!</h3>
    <p> Please confirm the following data is correct: </p>
    <div>
      Name: {firstName} {lastName}
    </div>
    <div>
      Address: {address} {addressTwo}
    </div>
    <button css={buttonBase} onClick={successHandler}>
      Yes!
    </button>
    <button
      css={[buttonBase, modalButton]}
      onClick={e => {
        e.preventDefault();
        toggleDialog(false);
      }}>
      Hang On!
    </button>
  </div>
);

export default Dialog;
