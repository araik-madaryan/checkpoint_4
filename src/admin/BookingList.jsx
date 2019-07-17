import React, { Component } from 'react';
import DisplayBooking from './DisplayBooking';
import { Row } from 'reactstrap';

import './BookingList.scss';

class BookingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      booking: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => {
      this.setState({
        booking: data,
      })
    })
  }
  render() {
    const { booking } = this.state;
    return (
      <div className="BookingList">
        <h1>Réservations</h1>
        <Row>
          {booking.map((booking, i) => <DisplayBooking {...booking} key={i} id={booking.id} />)}
        </Row>
      </div>
    );
  }
}

export default BookingList;
