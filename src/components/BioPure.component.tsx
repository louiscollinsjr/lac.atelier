import React from 'react';
import Biopure from '../assets/biopure.png';

const BioPure: React.FC = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center bg-cover bg-center">
        {/* //style={{ backgroundImage: `url(${Biopure})` }} */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-auto ">
            <img src={Biopure} alt="Biopure" className="w-full h-auto rounded-xl" />
          </div>
          <div>
          <h2 className="text-3xl font-bold mb-4">BioPure</h2>
            <p className="text-gray-800 mb-4 text-sm">
              Welcome to L.A.C. Atelier, your premier destination for premium beauty and wellness services.
              Our journey began with a passion for beauty and a commitment to excellence.
              We believe in the power of natural beauty and the importance of nurturing your skin.
            <br/><br/>
              Our team of skilled professionals is dedicated to providing you with the best services and products.
              At L.A.C. Atelier, we offer a wide range of services including facials, body treatments, and more.
              Our goal is to help you look and feel your best.
            <br/><br/>
              Thank you for choosing L.A.C. Atelier. We look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioPure;

