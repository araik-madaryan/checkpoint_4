import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CardStrap.scss';

class CardStrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { 
      modal_1,
      modal_2,
      modal_3,
      modal_4,
      modal_5,
      modal_6,
      toggle_1,
      toggle_2,
      toggle_3,
      toggle_4,
      toggle_5,
      toggle_6 
     } = this.props;
    return (
      <div className="CardStrap">
        <h1>Nos Spectacles</h1>
        <Row className="align-cards">
          <Col sm="4">
            <Card body>
              <CardTitle>Amanula</CardTitle>
              <img className="spectacles" src="/assets/amaluna.jpg" alt="spectacle" />
              <Button onClick={toggle_1}>Découvrir le spectacle</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>Crystal</CardTitle>
              <img className="spectacles" src="/assets/crystal.jpg" alt="spectacle" />
              <Button onClick={toggle_2}>Découvrir le spectacle</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>Kurios</CardTitle>
              <img className="spectacles" src="/assets/kurios.jpg" alt="spectacle" />
              <Button onClick={toggle_3}>Découvrir le spectacle</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>Michael Jackson</CardTitle>
              <img className="spectacles" src="/assets/michael.jpg" alt="spectacle" />
              <Button onClick={toggle_4}>Découvrir le spectacle</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>Volta</CardTitle>
              <img className="spectacles" src="/assets/volta.jpg" alt="spectacle" />
              <Button onClick={toggle_5}>Découvrir le spectacle</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle>Zumanity</CardTitle>
              <img className="spectacles" src="/assets/zumanity.jpg" alt="spectacle" />
              <Button onClick={toggle_6}>Découvrir le spectacle</Button>
            </Card>
          </Col>
        </Row>
        
        <Modal isOpen={modal_1} toggle={toggle_1} className={this.props.className}>
          <ModalHeader toggle={toggle_1}>Amanula</ModalHeader>
          <img className="modal-img" src="/assets/amaluna.jpg" alt="modal-img" />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle_1}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal_2} toggle={toggle_2} className={this.props.className}>
          <ModalHeader toggle={toggle_2}>Crystal</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle_2}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal_3} toggle={toggle_3} className={this.props.className}>
          <ModalHeader toggle={toggle_3}>Kurios</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle_3}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal_4} toggle={toggle_4} className={this.props.className}>
          <ModalHeader toggle={toggle_4}>Michael Jackson</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle_4}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal_5} toggle={toggle_5} className={this.props.className}>
          <ModalHeader toggle={toggle_5}>Volta</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle_5}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modal_6} toggle={toggle_6} className={this.props.className}>
          <ModalHeader toggle={toggle_6}>Zumanity</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle_6}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CardStrap;