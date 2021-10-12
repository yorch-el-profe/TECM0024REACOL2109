import PropTypes from "prop-types";
import React from "react";

class ProductForm extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    picture: "",
  };

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  onChangePicture(event) {
    this.setState({ picture: event.target.value });
  }

  onChangePrice(event) {
    this.setState({ price: event.target.value });
  }

  onSubmitForm(event) {
    event.preventDefault();
    this.props.onFormCompleted(this.state);
  }

  render() {
    return (
      <form className="mt-4 mb-4" onSubmit={this.onSubmitForm.bind(this)}>
        <h3>Lista de productos</h3>

        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={this.onChangeName.bind(this)}
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <input
            type="text"
            className="form-control"
            onChange={this.onChangeDescription.bind(this)}
          />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            className="form-control"
            onChange={this.onChangePrice.bind(this)}
          />
        </div>

        <div className="form-group">
          <label>URL de la imagen</label>
          <input
            type="text"
            className="form-control"
            onChange={this.onChangePicture.bind(this)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success btn-block"
          id="agregarProducto"
        >
          Agregar producto a la lista
        </button>
      </form>
    );
  }
}

ProductForm.propTypes = {
  onFormCompleted: PropTypes.func.isRequired,
};

export default ProductForm;
