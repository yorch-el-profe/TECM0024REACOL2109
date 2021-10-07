import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
  };

  addCounter() {
    // this.state.counter = this.state.counter + 1; ❌
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    // 1er solución "preservar el contexto de la función"
    //const addCounter = this.addCounter.bind(this);

    // 2nda solución "invocar la función dentro del evento"

    return (
      <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
        <div className="col-6 text-center">
          <h1 className="fs-1">{this.state.counter}</h1>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => this.addCounter()}
          >
            Click me
          </button>
        </div>
      </div>
    );
  }
}

export default App;
