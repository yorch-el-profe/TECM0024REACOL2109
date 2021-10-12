import React from "react";

class Message extends React.Component {
  componentDidMount() {
    console.log("Message ya está renderizado");
  }

  /*
    Se ejecuta ANTES de eliminar el componente (componentWillUnmount)
  */
  componentWillUnmount() {
    console.log(
      "Apunto de eliminar el componente Message (componentWillUnmount)"
    );
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default Message;
