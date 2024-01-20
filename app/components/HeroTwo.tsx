import React from 'react';
import {ChevronDoubleRightIcon} from '@heroicons/react/16/solid';
import {Button, Link} from '@nextui-org/react';

const HeroTwo = () => {
  return (
    <div className="ImageTwo flex items-center justify-center h-full px-2">
      <div className="flex flex-col items-center justify-center mx-auto bg-black/45 border-1 border-gray-700 p-4 rounded-3xl">
        <h1 className="text-4xl sm:text-8xl font-Righteous text-center text-white">
          Elije tu camino
        </h1>
        <div className="flex flex-wrap justify-center mx-auto gap-4 pt-6 sm:pt-10">
          <Link>
            <Button className="bg-black/20 backdrop-blur-xl text-rose-100 px-3 sm:px-6 rounded-2xl shadow-lg font-bold font-Righteous text-lg sm:text-xl py-6 border border-rose-100 animate-fade-up animate-duration-300 delay-500">
              2T Coleccion
              <ChevronDoubleRightIcon className="w-6 sm:w-8 h-6 sm:h-8 ml-2 animate-fade animate-infinite animate-duration-[1500ms]" />
            </Button>
          </Link>
          <Link>
            <Button className="bg-black/20 backdrop-blur-xl text-rose-100 px-3 sm:px-6 rounded-2xl shadow-lg font-bold font-Righteous text-lg sm:text-xl py-6 border border-rose-100 animate-fade-up animate-duration-300 delay-500">
              4T Coleccion
              <ChevronDoubleRightIcon className="w-6 sm:w-8 h-6 sm:h-8 ml-2 animate-fade animate-infinite animate-duration-[1500ms]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
