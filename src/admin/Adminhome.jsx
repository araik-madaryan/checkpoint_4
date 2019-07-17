import React from 'react';
import BookingList from './BookingList';
import NewSpectacle from './NewSpectacle';
import SpectacleAdmin from './SpectacleAdmin';

function Adminhome() {
  return (
    <div className="Adminhome">
      <NewSpectacle />
      <SpectacleAdmin />
      <BookingList />
    </div>
  );
}

export default Adminhome;
