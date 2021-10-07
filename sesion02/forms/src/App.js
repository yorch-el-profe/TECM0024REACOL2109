import React from "react";

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
}

export default App;
