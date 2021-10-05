import React from "react";

class CheckInput extends React.Component {
  render() {
    return (
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
    );
  }
}

export default CheckInput;
