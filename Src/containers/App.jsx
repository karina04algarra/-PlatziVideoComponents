import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';
import '../assets/styles/App.scss';



const App = () => {
  const [ videos, setVideos ] = useState({mylist:[],trends:[],originals:[]});
  useEffect( () => {
    fetch('http://localhost:3000/initialState')
    .then(response => response.json())
    .then(data => setVideos(data));
  }, []);
  return (
  <div className="App">
    <Header />
    <Search />

    {videos.mylist.length > 0 &&
      <Categories title="Mi lista">
      <Carousel>
        <CarouselItem />
      </Carousel>
      </Categories>
    }

    
    <Categories title="Tendencias">
      <Carousel>
        {videos.trends.map(item =>
          <CarouselItem key={item.id} {...item}  />
        )}
      </Carousel>
    </Categories>

      <Categories title="Aprende español con Spkinpanish">
      <Carousel>
      {videos.originals.map(item =>
          <CarouselItem key={item.id} {...item}  />
        )}
      </Carousel>
    </Categories>

    <Footer />
  </div>
);
}

export default App;
