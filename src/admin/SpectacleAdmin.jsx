import React, { Component } from 'react';
import { Row } from 'reactstrap';
import ModifySpectacle from './ModifySpectacle';
import './SpectacleAdmin.scss';

class SpectacleAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spectacle: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/spectacle')
    .then(res => res.json())
    .then(data => {
      this.setState({
        spectacle: data,
      })
    })
  }

  render() {
    const { spectacle } = this.state;
    return (
      <div className="SpectacleAdmin">
        <h1>Modifier un spectacle</h1>
        <Row className="align-items">
          {spectacle.map((spectacle, i) => <ModifySpectacle {...spectacle} key={i} />)}
        </Row>
      </div>
    );
  }
}

export default SpectacleAdmin;