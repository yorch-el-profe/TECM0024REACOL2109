/*
  Destructuring - ECMAScript 6 o 2015

  Extraer propiedades de un objeto

  const obj = { nombre: "Juanito", edad: 15, direccion: "..." }

  const { nombre, edad } = obj;

  const nombre = obj.nombre;
  const edad = obj.edad;


  function f(obj) {
    const direccion = obj.direccion;
  }

  function f({ direccion }) {
    
  }
*/

function Navbar({ title, night }) {
  return (
    <nav
      className={
        night ? "navbar navbar-dark bg-dark" : "navbar navbar-light bg-light"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
