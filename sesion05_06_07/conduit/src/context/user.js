import React from "react";

const UserContext = React.createContext({
  user: null, // Valores por defecto del contexto
  setUser: function () {},
});

export default UserContext;
