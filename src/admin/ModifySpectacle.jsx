import React, { Component } from 'react';
import { Card, Button, CardTitle, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import './ModifySpectacle.scss';

class ModifySpectacle extends Component {
  constructor(props) {
    super(props);
    const { title, image, description, date, price } = this.props;
    this.state = {
      modal: false,
      title,
      image,
      description,
      date,
      price,
    };
  }

  updateField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props;
    const { title, image, description, date, price } = this.state;
    const spectacle = { title, image, description, date, price };
    fetch(`http://localhost:3000/api//modifyspec/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spectacle)
    })
    .then((res) => {
      if (res.error) {
        NotificationManager.error('', 'Échec de la modification', 3000);
      } else {
        NotificationManager.success('', 'Modification réussie', 3000);
      }
    });
  }

  render() {
    const { modal } = this.state;
    const { title, image, description, date, price } = this.state;
    return (
      <div className="ModifySpectacle" id="modifier">
          <Col sm="6">
            <Card body>
              <CardTitle className="title">{title}</CardTitle>
              <img className="spectacles" src={image} alt="spectacle" />
              <Button onClick={this.toggle}>Modifier</Button>
            </Card>
          </Col>

        <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
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
                  value="Appliquer"
                  name="Appliquer" 
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <NotificationContainer />
      </div>
    );
  }
}

export default ModifySpectacle;