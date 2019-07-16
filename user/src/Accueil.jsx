import React from 'react';
import NavbarStrap from './NavbarStrap';
import './Accueil.scss';

function Accueil() {
  return (
    <div className="Accueil">
      <NavbarStrap />
      <img className="bg-image" src="/assets/circusWallp.jpg" alt="background-circus" />
    </div>
  );
}

export default Accueil;