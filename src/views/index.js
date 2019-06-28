import React, { Component } from 'react';

import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    };
  }

  async onClick(id) {
    const response = await fetch(`http://localhost:8080/pets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isAdopted: true }),
    });

    const { success } = await response.json();

    if (success) this.fetchData();
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const response = await fetch('http://localhost:8080/pets/');

    const { payload } = await response.json();

    const list = payload.allPets.map((pet) => {
      const {
        name: title,
        breed: subtitle,
        photo: img,
        isAdopted: adopt,
        _id: id,
      } = pet;

      return {
        title,
        subtitle,
        img,
        adopt,
        id,
      };
    });

    this.setState({ list });
  }

  async onDelete(id){
    const response = await fetch(`http://localhost:8080/pets/${id}`,{
      method:'DELETE'
    })

    const { success } = await response.json();

    if (success) this.fetchData();
  }


  render() {
    const cards = this.state.list.map((petInfo) => (
      <div
        className="col-md-4"
        key={petInfo.id}
      >
        <Card {...petInfo}>

        <CustomButton
          onClick={this.onDelete.bind(this,petInfo.id)}
          text="Borrar"
          className="is-danger"
        />

          { !petInfo.adopt
              ?
                <CustomButton
                  onClick={this.onClick.bind(this, petInfo.id)}
                  text="Adoptar"
                  className="is-success"
                />
              :
                'Ya esta adoptado'
          }
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          { cards }
        </div>
      </div>
    )
  }
}

export default Index;
