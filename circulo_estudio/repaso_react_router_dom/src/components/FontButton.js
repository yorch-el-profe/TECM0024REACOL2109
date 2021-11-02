import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const buttonStyle = {
  fontFamily: "'Indie Flower', cursive",
};

function FontButton({ title, to }) {
  return (
    <Button sx={buttonStyle} color="inherit" to={to} component={Link}>
      {title}
    </Button>
  );
}

export default FontButton;
