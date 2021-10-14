import { useState } from "react";

/*
  Lo que necesito para trabajar con React:
  1. JavaScript (let, const, function, class, array, object, dom)
  2. Programación Orienta a Objetos
    * Clases
    * Herencia
    * constructor/super
    * métodos
  3. Contexto de una función (this)

  Lo que necesito para entender React:
  1. Diseño orientado a componentes
  2. Estado de un componente (One Way Binding)
  3. Props / PropTypes
  4. Eventos
*/
/*
  La versión 16.8 trajo una actualización para la creación
  de componentes.

  El approach es más "funcional" (Programación Funcional)
*/

/*
  class App extends React.Component {
    state = {
      count: 0
    }

    incrementCount() {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount.bind(this)}>
          Click me
        </button>
      )
    }
  }
*/

/*
  Hooks son funciones que implementan una funcionalidad especifica:

    * useState: Llevar el control de un estado
    * useEffect: Llevar el control de los ciclos de vida
    * useMemo: Almacenar en caché
    * useContext: Llevar el control de un estado "global"
    * useRef: Guarda referencias de DOM
  
  NOTA: LOS HOOKS NO FUNCIONAN CON CLASES
*/
function App() {
  /*
    useState regresa un arreglo con dos posiciones:
      0: El valor actual del estado
      1: Una función para actualizar el estado

    Destructuring:
      const arr = [1,2,3];
      const [x, y, z] = arr;

      x -> 1
      y -> 2
      z -> 3
  */

  //const count = algo[0];
  //const setCount = algo[1];

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
