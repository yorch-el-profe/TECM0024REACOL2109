import React from "react";
import Form from "./components/Form";

/*
  Los atributos de HTML se cambian por:
  
  tabindex -> tabIndex
  for -> htmlFor
  class -> className
*/

class App extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <Form />
      </div>
    );
  }
}

export default App;
