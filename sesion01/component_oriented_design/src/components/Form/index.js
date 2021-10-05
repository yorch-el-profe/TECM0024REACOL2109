import React from "react";
import CheckInput from "../CheckInput";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";

class Form extends React.Component {
  render() {
    return (
      <form>
        <EmailInput />
        <PasswordInput />
        <CheckInput />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
