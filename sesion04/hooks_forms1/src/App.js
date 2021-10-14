import { useRef, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputUsername = useRef(null);
  const inputPassword = useRef(null);

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      // Manipulación del DOM
      inputUsername.current.value = "";
      inputPassword.current.value = "";

      console.log(inputUsername.current.classList);

      alert("Bienvenido!");
    } else {
      alert("Usuario y contraseña invalidos");
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Bienvenido</h1>
        <h3>Ingresa usuario y contraseña para iniciar sesión</h3>

        <form className="form" onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            className="alguna-clase"
            onChange={handleUsername}
            ref={inputUsername}
            placeholder="Nombre de usuario"
          />
          <input
            id="password"
            type="password"
            className="alguna-clase"
            placeholder="Contraseña"
            onChange={handlePassword}
            ref={inputPassword}
          />
          <button type="submit" id="login-button">
            Enviar
          </button>
        </form>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

/*import React from "react";

class App extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onChangeUser(event) {
    this.setState({ username: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitForm(event) {
    // Evitar recargar la página con un evento submit
    event.preventDefault();

    // Destructuring - ES2015 - ES6
    const { username, password } = this.state;

    if (username === "admin" && password === "password") {
      alert("Bienvenido!");
    } else {
      alert("Usuario y contraseña invalidos");
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Bienvenido</h1>
          <h3>Ingresa usuario y contraseña para iniciar sesión</h3>

          <form className="form" onSubmit={this.onSubmitForm.bind(this)}>
            <input
              type="text"
              onChange={this.onChangeUser.bind(this)}
              placeholder="Nombre de usuario"
            />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={this.onChangePassword.bind(this)}
            />
            <button type="submit" id="login-button">
              Enviar
            </button>
          </form>
        </div>

        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}*/

export default App;
