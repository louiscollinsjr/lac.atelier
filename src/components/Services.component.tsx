import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const Services: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-[#fcfcfc] py-24 min-h-[700px]">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-didot text-slate-500">Our Services.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Service cards */}
          <div className="bg-slate-800 text-white p-4 rounded-lgs flex flex-col justify-end h-[210px]">
            <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
    
          </div>
          <div className="bg-slate-800 text-white p-4 rounded-lgs sm:col-span-2 flex flex-col justify-end h-[210px]">
          <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
          </div>
          <div className="bg-slate-800 text-white p-4 rounded-lgs flex flex-col justify-end h-[210px]">
            <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
          </div>
          <div className="bg-slate-800 text-white p-4 rounded-lgs flex flex-col justify-end h-[210px]">
            <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
          </div>
          <div className="bg-slate-800 text-white p-4 rounded-lgs flex flex-col justify-end h-[210px]">
            <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
          </div>
          <div className="bg-slate-800 text-white p-4 rounded-lgs flex flex-col justify-end h-[210px]">
            <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
          </div>
          <div className="bg-slate-800 text-white p-4 rounded-lgs flex flex-col justify-end h-[210px]">
            <div className="grid grid-cols-5 items-center">
              <h3 className="text-sm col-span-4">Something Amazing</h3>
              <div className="justify-self-end">
                <FaArrowUpLong className="text-xl opacity-70 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
