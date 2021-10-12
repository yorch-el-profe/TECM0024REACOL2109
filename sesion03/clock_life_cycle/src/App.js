import React from "react";
import Clock from "./components/Clock";

class App extends React.Component {
  state = {
    show: true,
  };

  toggleClock() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <button onClick={this.toggleClock.bind(this)}>
          {this.state.show ? "OFF" : "ON"}
        </button>
        {this.state.show ? <Clock /> : null}
      </>
    );
  }
}

export default App;
