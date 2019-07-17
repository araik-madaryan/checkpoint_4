import React, { Component } from 'react';
import { Card, Button, CardTitle, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModifySpectacle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      image: '',
      description: '',
      date: '',
      price: '',
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

  render() {
    const { modal } = this.state;
    const { title, image, description, date, price } = this.props;
    return (
      <div className="CardStrap">
          <Col sm="6">
            <Card body>
              <CardTitle>{title}</CardTitle>
              <img className="spectacles" src={image} alt="spectacle" />
              <Button onClick={this.toggle}>Modifier</Button>
            </Card>
          </Col>

        <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
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
            </form>
          </ModalBody>
          <ModalFooter>
            <div>
              <input
                className="button"
                type="submit"
                value="Appliquer"
                name="Appliquer" 
              />
              </div>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModifySpectacle;