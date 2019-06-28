import React, { Component } from 'react';

import CustomButton from '../CustomButton';

class PetForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      breed: '',
      img: '',
    };
  }

  onChange(event) {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  }

  async onSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/pets/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        breed: this.state.breed,
        photo: this.state.img,
        ageInMonths: 1,
        size: 'medium',
        species: 'dog',
        owner: 'me',
        userId: 0,
      }),
    });

    const { success } = await response.json();

    if (success) this.props.onSuccess();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            aria-describedby="pet-name"
            placeholder="Enter the name of the pet"
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">
            Breed
          </label>
          <input
            id="breed"
            className="form-control"
            aria-describedby="pet-breed"
            placeholder="Enter the breed of the pet"
            value={this.state.breed}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="img">
            Image Link
          </label>
          <input
            id="img"
            className="form-control"
            aria-describedby="pet-img"
            placeholder="Enter the img link of the pet"
            value={this.state.img}
            onChange={this.onChange.bind(this)}
          />
        </div>

        <CustomButton
          className="is-info"
          text="Crear pet"
        />
      </form>
    )
  }
}

export default PetForm;
