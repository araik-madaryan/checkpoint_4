import React from 'react';
import BookingList from './BookingList';
import NewSpectacle from './NewSpectacle';
import SpectacleAdmin from './SpectacleAdmin';
import NavbarStrap from './NavbarStrap'

function Adminhome() {
  return (
    <div className="Adminhome">
      <NavbarStrap />
      <NewSpectacle />
      <SpectacleAdmin />
      <BookingList />
    </div>
  );
}

export default Adminhome;
