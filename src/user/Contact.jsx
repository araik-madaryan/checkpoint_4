import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="Contact" id="contact">
      <h1>Contact</h1>
      <a href="mailto:circus@wildcircus.eu">
        <input className="button" type="button" value="Nous contacter" />
      </a>
      <div className="Numero">
        <i className="fa fa-phone"></i>
        <p>07 83 69 23 48</p>
      </div>
      <div className="Mail">
        <i class="fa fa-envelope"></i>
        <p>Circus@wildcircus.eu</p>
      </div>
      <p>Suivez-nous au quotidien sur nos réseaux sociaux. </p>
      <div className="Link-network">
        <a className="a" href="https://www.linkedin.com/in/araik-madaryan/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin col-lg-12 col-md-6"></i> 
        </a>
        <a className="a" href="https://github.com/araik-madaryan/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github col-lg-12 col-md-6"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
