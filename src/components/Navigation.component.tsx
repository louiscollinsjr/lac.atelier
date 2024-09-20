import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.component.tsx';

const Navigation: React.FC = () => {
  return (
    <section className='bg-[#fcfcfc]'>
    <nav className="text-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between font-didot">
          <div className="text-lg font-bold font-didot tracking-widest">l.a.c. Atelier</div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#home" className="text-black hover:text-gray-300">Manicures & Pedicures</a>
            <a href="#services" className="text-black hover:text-gray-300">Cosmetic Services</a>
            <a href="#about" className="text-black hover:text-red-900">SHOP</a>
            <a href="#contact" className="text-black hover:text-gray-300">Book Appointment</a>
          </div>
        </div>
      </div>
    </nav>
    <Outlet/>
    <Footer/>
    </section>
  );
};

export default Navigation;