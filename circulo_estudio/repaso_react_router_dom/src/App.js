import Container from "@mui/material/Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TypeList from "./pages/TypeList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/type/:type">
            <TypeList />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
