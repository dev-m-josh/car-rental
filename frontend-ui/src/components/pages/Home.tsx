import React from 'react'
import Hero from '../Hero';
import Features from '../Features';
import Cars from '../Cars';
import Footer from '../Footer';

export const Home = () => {
  return (
      <div className="container w-full mx-0 px-0 mt-16 min-w-full">
            <Hero />
            <Features />
            <Cars />
            <Footer />
        </div>
  );
}
