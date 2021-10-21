import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/user";
const API = process.env.REACT_APP_API;

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const user = { email, password };

    fetch(`${API}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          alert("Usuario o contraseña incorrectos");
        } else {
          alert("Bienvenido!");
          setUser(data.user);
          history.push("/");
        }
      });
  }

  return (
    <form className="col-5" onSubmit={handleSubmit}>
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
  );
}

export default SignInForm;
