import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FontButton from "./FontButton";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <FontButton title="Fire" to="/type/fire" />
        <FontButton title="Electric" to="/type/electric" />
        <FontButton title="Water" to="/type/water" />
        <FontButton title="Poison" to="/type/poison" />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
