import React from 'react';

import img from '../assets/static/img1.jpg';
import icon from '../assets/static/playIcon.png';
import icon2 from '../assets/static/plusIcon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => {

  <div className="carousel-item">
    <img className="carousel-item__img" src={img} alt="no estoy" />
    <div className="carousel-item__details">
      <div>
        <img
            className="carousel-item__details--img"
            src={icon}
            alt="Play Icon"
            />
        <img
            className="carousel-item__details--img"
            src={icon2}
            alt="Plus Icon"
            />
      </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
  
);
}
export default CarouselItem;