import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CardStrap from './CardStrap';
import './Spectacle.scss';

class Spectacle extends Component {
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
      <div className="Spectacle">
        <h1>Nos Spectacles</h1>
        <Row className="align-items">
          {spectacle.map((spectacle, i) => <CardStrap {...spectacle} key={i} />)}
        </Row>
      </div>
    );
  }
}

export default Spectacle;