import React from "react";

class Product extends React.Component {
  render() {
    return (
      <figure className="snip1171">
        <img src={this.props.picture} alt="sample71" />
        <div className="price">{this.props.price}</div>
        <figcaption>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <a>Agregar al carrito</a>
        </figcaption>
      </figure>
    );
  }
}

export default Product;
