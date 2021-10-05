import React from "react";

class PasswordInput extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
        <div id="exampleInputPassword1" className="form-text">
          Password length must be at least 8 characters
        </div>
      </div>
    );
  }
}

export default PasswordInput;
