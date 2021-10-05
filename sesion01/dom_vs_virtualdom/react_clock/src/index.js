import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
  React.Fragment nos ayuda a agrupar etiquetas
  sin que agregue un div o un elemento adicional.

  <React.Fragment>...</React.Fragment>
  <>...</>
*/

/*
  Para incluir "valores" o variables en el JSX
  se utiliza { variable/valor }

  const nombre = "Paquito";
  <h1>{ nombre }</h1>
*/

setInterval(function () {
  ReactDOM.render(
    <>
      <h1>Hello from React</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </>,
    document.getElementById("root")
  );
}, 1000);
