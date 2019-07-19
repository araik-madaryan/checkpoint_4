import React, { Component } from 'react';
import { Card, Button, CardTitle, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CardStrap.scss';

class CardStrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
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
              <CardTitle className="title">{title}</CardTitle>
              <img className="spectacles" src={image} alt="spectacle" />
              <Button onClick={this.toggle}>Découvrir le spectacle</Button>
            </Card>
          </Col>

        <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          {date}
          <ModalBody>
            {description}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>{price} €</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CardStrap;