import React from "react";
import Product from "./components/Product";

class App extends React.Component {
  state = {
    products: [
      {
        price: "$7,000 MXN",
        name: "Nintendo Switch",
        description: "Consola Nintendo Switch con capacidad de 32 GB",
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg",
      },
      {
        price: "$4,700 MXN",
        name: "Nintendo Switch Lite",
        description: "Consola Nintendo Switch Lite con capacidad de 32 GB",
        picture:
          "https://http2.mlstatic.com/D_NQ_NP_760512-MLA41851508080_052020-O.jpg",
      },
      {
        price: "$13,000 MXN",
        name: "Xbox Series X",
        description: "Consola Xbox Series X con capacidad de 1 TB",
        picture:
          "https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadaxbox.jpg",
      },
      {
        price: "$7,000 MXN",
        name: "Xbox Series S",
        description: "Consola Xbox Series S con capacidad de 512 GB",
        picture:
          "https://www.somosxbox.com/wp-content/uploads/2020/09/xbox-series-x-xbox-series-s-que-xbox-compro-1-somosxbox.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {this.state.products.map((product) => (
          <Product
            name={product.name}
            picture={product.picture}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    );
  }
}

export default App;
