import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Card = ({data}) => {
    return (
        <div>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
      <div className="card bg-white shadow-md rounded-xl overflow-hidden p-1 w-full mx-auto">
         <div className="relative">
          <img
            className="w-full h-[200px] p-3 rounded-3xl object-cover"
            src={data?.image}
            alt={data?.productName}
          />
          <h1 className="absolute top-3 right-4 bg-rose-100 text-rose-600 font-bold px-3 py-1 rounded-full text-sm shadow">
            ${data?.price}
          </h1>
        </div>
            <h1 className='bg-rose-50 text-rose-600 text-lg text-center'>{data.productName}</h1>
      </div>
    </Fade>
        </div>
    );
};

export default Card;