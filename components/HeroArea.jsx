import React from 'react';
import { Button } from './ui/button';

const HeroArea = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(https://i.ibb.co/TwTpgzL/coffee-cup-hero.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-neutral-content flex items-center h-screen px-20'>
        <div className='max-w-[70%]'>
          <h1 className='text-[130px] font-bold text-slate-700'>
            <span className='text-[#6F4E37]'>Pasto</span>
            <span className=''> Cafe</span>
          </h1>
          <h3 className='text-4xl font-bold text-slate-700'>
            Try the best coffee in the city
          </h3>
          <p className='my-5 w-2/3 text-slate-600'>
            Welcome to Pasto, where every cup tells a story. Nestled in the
            heart of Dhanmondi, we blend the finest beans with a cozy atmosphere
            to create the perfect haven for coffee lovers.
            <p className='mt-2'>
              Join us for a delightful experience that awakens your senses and
              nourishes your soul.
            </p>
          </p>
          <Button>About More </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
