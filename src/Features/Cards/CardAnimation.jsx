// CardAnimation.js
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Card from './Card';

const CardAnimation = ({ images }) => {
  const swiperRef = useRef(null);

  return (
    <div
      onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4"
      >
        {images.map((data) => (
          <SwiperSlide key={data._id}>
            <Card data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardAnimation;
