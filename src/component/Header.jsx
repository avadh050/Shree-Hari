import React from "react";
import "/index.css";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-custom overflow-hidden h-[400px] w-full bg-center bg-[url('/src/assets/bg.jpeg')] bg-cover bg-no-repeat text-white p-4">
      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <img src="/src/Image/logo.jpeg" alt="logo" className="rounded-full w-full h-full object-cover" />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-3xl h-[45px] mt-3">Axay Chodvadiya</h1>
      <h3 className="mt-2 text-base sm:text-sm md:text-sm">Owner</h3>
      <h1 className="text-md sm:text-xl md:text-2xl h-[45px] mt-2">Shree Hari Engineer's</h1>
    </div>
  );
};

export default Header;
