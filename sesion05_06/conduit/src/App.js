import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./context/user";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
