import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './Formulaire.scss';

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      tel: '',
      spectacle: '',
    }
  }
  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      if (res.error) {
        NotificationManager.error('', 'Échec de la réservation', 4000);
      } else {
        NotificationManager.success('', 'Réservation réussie', 4000);
      }
    });
  }

  render() {
    const { firstname, lastname, email, tel, spectacle } = this.state;
    return (
      <div className="Formulaire">
        <form onSubmit={this.handleSubmit}>
          <h1>Réservation</h1>
          <label htmlFor="firstname">Prénom</label>
          <div>
            <input
              onChange={this.updateField}
              id="firstname" 
              type="text"
              value={firstname}
              name="firstname" 
            />
          </div>
          <label htmlFor="lastname">Nom</label>
          <div>
            <input
              onChange={this.updateField}
              id="lastname"
              type="text"
              value={lastname}
              name="lastname"
            />
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              onChange={this.updateField}
              id="email"
              type="email"
              value={email}
              name="email"
            />
          </div>
          <label htmlFor="tel">Téléphone</label>
          <div>
            <input
              onChange={this.updateField}
              id="tel"
              type="tel"
              value={tel}
              name="tel"
            />
          </div>
          <label>Spectacle</label>
          <div>
            <select onChange={this.updateField} id="spectacle" type="select" value={spectacle} name="spectacle">
              <option selected>Choix</option>
              <option>Amanula</option>
              <option>Crystal</option>
              <option>Kurios</option>
              <option>Michael Jackson</option>
              <option>Volta</option>
              <option>Zumanity</option>
            </select>
          </div>
          <div className="button">
            <input
              type="submit"
              value="Envoyer"
              name="submit"
            />
          </div>
        </form>
        <NotificationContainer />
      </div>
      
    );
  }
}

export default Formulaire;
