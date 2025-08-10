import React from 'react';
import Slider1 from './Sclider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const Banner = () => {
    return (
        <div className="carousel w-full h-8/12 my-5">
    
      <div id="slide2" className="carousel-item relative w-full">
        <Slider2 />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        
      </div>
        <div id="slide1" className="carousel-item relative w-full">
        <Slider1 />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Slider3 />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Banner;