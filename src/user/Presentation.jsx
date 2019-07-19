import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Presentation.scss';

class Presentation extends Component {
  render() {
    return (
      <div className="Presentation" id="presentation">
        <h1>Notre Histoire</h1>
        <div className="Paragraphe">
          <p>
          Les premiers spectacles de la <span className="color-select">famille Bouglione</span> mettaient en scène des fauves. 
          En 1910, Joseph dit Sampion Bouglione est sauvé par son fils durant une présentation de fauves.
          <br />
          <br />
          
          En 1926, Alexandre découvre un stock d’affiche de Buffalo Bill datant du <span className="color-select">Wild Wild West Show</span> de 1904. 
          Il convainc son père de les utiliser et de recréer un spectacle librement inspiré de l’épopée américaine :
          le <span className="color-select">Stade du capitaine Buffalo Bill</span>. C’est le triomphe !
          <br />
          <br />
          
          Parallèlement, <span className="color-select">le Cirque d’Hiver redevient un cirque le 12 octobre 1923</span> avec l’arrivée de Gaston Desprez.
          Le bâtiment est entièrement restauré.
          </p>
        </div>
        <div className="Carousel-size">
          <Carousel>
            <div>
              <img src="assets/fond1.jpg" alt="img-carousel" />
            </div>
            <div>
              <img src="assets/fond2.jpg" alt="img-carousel" />
            </div>
            <div>
              <img src="assets/fond3.jpg" alt="img-carousel" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Presentation;