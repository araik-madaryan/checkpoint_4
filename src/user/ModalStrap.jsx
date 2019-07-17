import React, { Component } from 'react';
import CardStrap from './CardStrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class ModalStrap extends Component {
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
    const { title, description, date, price } = this.props;
    return (
      <div className="ModalStrap">
        <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          {date}
          <ModalBody>
            {image}
            {description}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>{price} €</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <CardStrap toggle={this.toggle} {...this.props.spectacle} />

      </div>
    );
  }
}

export default ModalStrap;