import React from 'react';
import Services from './Services.component';
import BNY1 from '../assets/LAC-BNY1.png';
// import BioPure from './BioPure.component';
import PosterLime from './PosterLime.component';

const Home: React.FC = () => {
  return (
    <>
    <section className='bg-cover  bg-no-repeat pt-4' >
    {/* // style={{ backgroundImage: `url(${BNY2})` }} */}
    <div 
      className=" max-w-4xl mx-auto flex flex-col items-center p-4 backdrop-blur-3xl bg" 
    >
      <h1 className="text-center mb-24 leading-none">
        <span className="block text-9xl font-bold font-didot tracking-wide">l.a.c.</span>
        <span className="block text-sm font-sans tracking-widest -mt-1">A T E L I E R</span>
      </h1>
      
      <div className="w-full mb-8 border-white border-2">
        <img
          src={BNY1}
          alt="L.A.C. Atelier"
          className="w-full h-auto"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 font-didot">
        <a href="#process" className="text-base hover:underline">Manicures & Pedicures</a>
        <a href="#process" className="text-base hover:underline">Body Treatments</a>
        <a href="#shop" className="text-base hover:underline">Shop JessicaCosmetics.ro</a>
        <button className="bg-black text-white text-base hover:underline px-4 py-2 tracking-widest">Book Appointment</button>
      </div>
    </div>

    </section>

    <Services />
    {/* <BioPure /> */}
    <PosterLime />
    <PosterLime />
    </>
  );
};

export default Home;