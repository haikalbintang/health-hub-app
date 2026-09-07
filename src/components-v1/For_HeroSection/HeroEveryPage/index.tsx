import React, { useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const HeroEveryPage: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={images[0]}
        alt="Slider"
        className="w-full h-full object-cover transition-transform duration-500 transform-gpu scale-100 hover:scale-105"
        style={{
          maxHeight: "40vh",
          display: "block",
          margin: "0 auto",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="text-center">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
            <h1 className="text-9xl font-extrabold text-white mb-4 text-center">
              Escape to Italy
            </h1>
            <h2 className="text-4xl font-semibold text-white text-center">
              Discover our Italian recipes
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEveryPage;
