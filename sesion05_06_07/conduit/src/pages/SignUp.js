import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";

const API = process.env.REACT_APP_API;

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const user = { username, email, password };

    fetch(`${API}/api/users`, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          alert("Ocurrió un error al dar de alta al usuario");
        } else {
          alert("Usuario creado");
          // Hacer una redirección a la página de iniciar sesión

          // Es nativo del navegador (Multipage Application)
          //window.location.href = "/signin";

          // Es a través de React Router (Single Page Application)
          history.push("/signin");
        }
      });
  }

  return (
    <>
      <Navbar />

      <div className="container mt-3 d-flex justify-content-center flex-column align-items-center">
        <h1>Sign Up</h1>
        <form className="col-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control-lg form-control"
              id="inputUsername"
              placeholder="Username"
              onChange={handleUsername}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control-lg form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={handleEmail}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control-lg form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
