import React from "react";

class Clock extends React.Component {
  state = {
    time: new Date(),
    id: 0,
  };

  componentDidMount() {
    const id = setInterval(() => {
      console.log("Interval");
      this.setState({ time: new Date() });
    }, 1000);

    this.setState({ id });
  }

  componentWillUnmount() {
    clearInterval(this.state.id);
  }

  render() {
    return <h2>{this.state.time.toLocaleTimeString()}</h2>;
  }
}

export default Clock;
