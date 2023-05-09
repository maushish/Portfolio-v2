import React from 'react';
import Pdf from '../images/Maushish Yadav.pdf';

export default function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">Hi, This is Maushish</h1>
        <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>A 19 yr old indian kid who just wants to code</p>
        <div className=' space-x-2'> 
          <a href='#' className='inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md '>See more</a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className='inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 md:text-md '>My Cv</a>
        </div>
      </div>
    </div>
  );
}
