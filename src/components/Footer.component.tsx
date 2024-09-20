import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcfcfc] text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-didotTitle tracking-widest">l.a.c. Atelier</h3>
            <p className="text-sm"></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;