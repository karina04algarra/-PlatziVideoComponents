import React from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />

    <Categories title="Mi lista">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
      </Categories>

      <Categories title="Tendencias">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
      </Categories>

      <Categories title="Aprende español con Spkinpanish">
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
