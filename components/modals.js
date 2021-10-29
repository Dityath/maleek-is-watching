import React from "react";
import Image from "next/image";

function OpenModals() {
  return (
    <div className="absolute z-40 bg-black bg-opacity-80 w-screen h-screen flex justify-center items-center">
      <div className="absolute z-50 bg-white text-gray-900 max-w-lg max-h-80 p-4 text-center">
        Sorry we dont have 3d maleek at phone <br />
        please change your device to pc to having 3d maleek <br />
        <div className="w-48 h-48 relative mt-5 mx-auto">
          <Image src="/maleek.webp" alt="maleek" layout="fill" />
        </div>
        Here take the normal maleek instead.
      </div>
    </div>
  );
}

export default OpenModals;
