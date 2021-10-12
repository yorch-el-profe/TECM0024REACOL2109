import React from "react";
import Message from "./components/Message";

class App extends React.Component {
  state = {
    count: 0,
  };

  /*
    Se ejecuta ANTES del 1er renderizado de un componente
  */
  componentWillMount() {
    console.log("Antes del renderizado (componentWillMount)");
  }

  /*
    Se ejecuta DESPUÉS del 1er renderizado de un componente
  */
  componentDidMount() {
    console.log("Después del renderizado (componentDidMount)");
  }

  /*
    Se ejecuta después de cada renderizado (componentDidUpdate)
  */
  componentDidUpdate() {
    console.log("Después de cada renderizado (componentDidUpdate)");
  }

  onClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("Renderizado (render)");
    return (
      <>
        {this.state.count % 2 === 0 ? <Message /> : null}
        <button onClick={this.onClick.bind(this)}>
          Click Me {this.state.count}
        </button>
      </>
    );
  }
}

export default App;
