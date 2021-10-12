import PropTypes from "prop-types";
import React from "react";

class Product extends React.Component {
  render() {
    return (
      <figure className="snip1171">
        <img src={this.props.picture} alt="sample71" />
        <div className="price">${this.props.price} MXN</div>
        <figcaption>
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
          <a className="text-white">Agregar al carrito</a>
        </figcaption>
      </figure>
    );
  }
}

Product.propTypes = {
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
