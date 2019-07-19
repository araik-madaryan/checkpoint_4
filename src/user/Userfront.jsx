import React from 'react';
import NavbarStrap from './NavbarStrap';
import Accueil from './Accueil';
import Spectacle from './Spectacle';
import Formulaire from './Formulaire';
import Contact from './Contact';
import Presentation from './Presentation';
import Footer from './Footer';

function Userfront() {
  return (
    <div className="Userfront">
      <NavbarStrap />
      <Accueil />
      <Presentation />
      <Spectacle />
      <Formulaire />
      <Contact />
      <Footer />
    </div>
  );
}

export default Userfront;
