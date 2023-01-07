/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'lottie-react';

const Service = ({ service }) => {
  const { serviceName, animation } = service;
  return (
    <div className=''>
      <div className='h-[300px] card bg-base-100 shadow-xl hover:border-2 hover:border-primary items-center text-center'>
        <figure className='px-10 pt-10'>
          <Lottie className='w-1/2' loop={true} autoplay={true} animationData={animation}></Lottie>
        </figure>
        <div className='card-body absolute bottom-0 mb-5'>
          <h2 className='card-title'>{serviceName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
