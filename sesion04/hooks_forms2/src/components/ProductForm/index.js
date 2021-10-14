import PropTypes from "prop-types";
import { useState } from "react";

function ProductForm({ onFormCompleted }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onChangePicture(event) {
    setPicture(event.target.value);
  }

  function onChangePrice(event) {
    setPrice(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();
    onFormCompleted({ name, description, picture, price });
  }

  return (
    <form className="mt-4 mb-4" onSubmit={onSubmitForm}>
      <h3>Lista de productos</h3>

      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" onChange={onChangeName} />
      </div>

      <div className="form-group">
        <label>Descripción</label>
        <input
          type="text"
          className="form-control"
          onChange={onChangeDescription}
        />
      </div>

      <div className="form-group">
        <label>Precio</label>
        <input
          type="number"
          className="form-control"
          onChange={onChangePrice}
        />
      </div>

      <div className="form-group">
        <label>URL de la imagen</label>
        <input
          type="text"
          className="form-control"
          onChange={onChangePicture}
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

ProductForm.propTypes = {
  onFormCompleted: PropTypes.func.isRequired,
};

export default ProductForm;
