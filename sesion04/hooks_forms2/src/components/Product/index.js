import PropTypes from "prop-types";

const Product = ({ picture, price, name, description }) => {
  return (
    <figure className="snip1171">
      <img src={picture} alt="sample71" />
      <div className="price">${price} MXN</div>
      <figcaption>
        <h4>{name}</h4>
        <p>{description}</p>
        <a className="text-white">Agregar al carrito</a>
      </figcaption>
    </figure>
  );
};

Product.propTypes = {
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
