import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import './DisplayBooking.scss';

class DisplayBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  deleteBooking = () => {
    const { id } = this.props;
    fetch(`http://localhost:3000/api/deletebook/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      if (res.error) {
        NotificationManager.error('', 'Échec de la suppression', 3000);
      } else {
        NotificationManager.success('', 'Suppression réussie', 3000);
      }
    });
  }

  render() {
    const { firstname, lastname, email, tel, spectacle } = this.props;
    return (
      <div className="DisplayBooking" id="reservation">
        <Col sm="4">
          <Card body>
            <CardTitle><h1>{spectacle}</h1></CardTitle>
            <p>Prénom: {firstname}</p>
            <p>Nom: {lastname}</p>
            <p>Email: {email}</p>
            <p>Téléphone: {tel}</p>
            <div className="Buttons">
              <input 
                id="id"
                type='submit'
                value="Supprimer"
                name="Supprimer"
                onClick={this.deleteBooking}
              />
            </div>
          </Card>
        </Col>
        <NotificationContainer />
      </div>
    );
  }
}

export default DisplayBooking;
