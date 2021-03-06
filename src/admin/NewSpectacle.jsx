import React, { Component } from 'react';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import './NewSpectacle.scss';

class NewSpectacle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      date: '',
      price: '',
    }
  }
  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/spectacle/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      if (res.error) {
        NotificationManager.error('', 'Échec de la publication', 3000);
      } else {
        NotificationManager.success('', 'Publication réussie', 3000);
      }
    });
  }

  render() {
    const { title, image, description, date, price } = this.state;
    return (
      <div className="NewSpectacle" id="nouveau">
        <form onSubmit={this.handleSubmit}>
          <h1>Nouveau spectacle</h1>
          <label htmlFor="title">Titre</label>
          <div>
            <input
              onChange={this.updateField}
              id="title" 
              type="text"
              value={title}
              name="title" 
            />
          </div>
          <label htmlFor="image">Image - URL</label>
          <div>
            <input
              onChange={this.updateField}
              id="image" 
              type="text"
              value={image}
              name="image" 
            />
          </div>
          <label htmlFor="description">Description</label>
          <div>
            <input
              onChange={this.updateField}
              id="description" 
              type="text"
              value={description}
              name="description" 
            />
          </div>
          <label htmlFor="date">Date</label>
          <div>
            <input
              onChange={this.updateField}
              id="date" 
              type="date"
              value={date}
              name="date" 
            />
          </div>
          <label htmlFor="price">Prix</label>
          <div>
            <input
              onChange={this.updateField}
              id="price" 
              type="number"
              value={price}
              name="price" 
            />
          </div>
          <div>
            <input
              className="button"
              type="submit"
              value="Envoyer"
              name="Envoyer" 
            />
          </div>
        </form>
        <NotificationContainer />
      </div>
      
    );
  }
}

export default NewSpectacle;
