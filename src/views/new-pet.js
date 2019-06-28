import React,{Component} from 'react';

import PetForm from '../components/PetForm';

class NewPet extends Component {

  onSuccess(){
    this.props.history.push('/');
  }

  render (){
    return (
  <div className = "container" >
      <PetForm onSuccess={this.onSuccess.bind(this)} />
  </div>
  )}
  }

  export default NewPet;
