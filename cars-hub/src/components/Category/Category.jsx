import React from 'react';
import { Link } from 'react-router-dom';
import hondaImg from '../../../public/images/images/logos/honda.webp';
import hyundaiImg from '../../../public/images/images/logos/hyundai.webp';
import marutiImg from '../../../public/images/images/logos/maruti-suzuki.webp';
import renaultImg from '../../../public/images/images/logos/renault.webp';
import tataImg from '../../../public/images/images/logos/tata.webp';
import toyotaImg from '../../../public/images/images/logos/toyota.webp';
import fordImg from '../../../public/images/images/logos/ford.webp';

function Category() {
  return (
    <>
      <div className='grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 gap-2 py-6 justify-center'>
        <div className="p-4 text-center w-auto hover:bg-blue-50 h-24 rounded hover:scale-105 hover:transition-all">
          <img src={hondaImg} alt="Honda" />
        </div>
        <div className="p-4 text-center w-auto hover:bg-blue-50 h-24 rounded hover:scale-105 hover:transition-all">
          <img src={hyundaiImg} alt="Hyundai" />
        </div>
        <div className="p-4 text-center w-auto hover:bg-blue-50 h-24 rounded hover:scale-105 hover:transition-all">
          <img src={marutiImg} alt="Maruti Suzuki" />
        </div>
        <div className="p-4 text-center hover:bg-blue-50 w-auto h-24 rounded hover:scale-105 hover:transition-all">
          <img src={renaultImg} alt="Renault" />
        </div>
        <div className="p-4 text-center hover:bg-blue-50 w-auto h-24 rounded hover:scale-105 hover:transition-all">
          <img src={tataImg} alt="Tata" />
        </div>
        <div className="py-4 text-center hidden md:block w-auto hover:bg-blue-50 h-24 rounded hover:scale-105 hover:transition-all">
          <img src={toyotaImg} alt="Toyota" />
        </div>
        <div className="py-4 text-center hidden md:block w-auto hover:bg-blue-50 h-24 rounded hover:scale-105 hover:transition-all">
          <img src={fordImg} alt="Ford" />
        </div>
      </div>
    </>
  );
}

export default Category;
