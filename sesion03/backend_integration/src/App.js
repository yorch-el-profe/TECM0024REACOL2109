import React from "react";

class App extends React.Component {
  state = {
    picture: "",
    breeds: [],
    breed: "",
  };

  componentDidMount() {
    fetch("https://bedu-dogs-api.herokuapp.com/breeds")
      .then(function (response) {
        return response.json();
      })
      .then(({ data }) => {
        this.setState({ breeds: data, breed: data[0] });
      });
  }

  onChangeBreed(event) {
    this.setState({ breed: event.target.value });
  }

  getRandomImage(event) {
    event.preventDefault();

    fetch(
      `https://bedu-dogs-api.herokuapp.com/breeds/${this.state.breed}/images`
    )
      .then(function (response) {
        return response.json();
      })
      .then(({ data }) => {
        this.setState({ picture: data });
      });
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.getRandomImage.bind(this)}>
          <div className="mb-3">
            <select
              className="form-select"
              onChange={this.onChangeBreed.bind(this)}
            >
              {this.state.breeds.map((breed) => (
                <option value={breed}>{breed}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Obtener imagen
          </button>
        </form>

        <div className="d-flex justify-content-center mt-4">
          {this.state.picture ? <img src={this.state.picture} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
