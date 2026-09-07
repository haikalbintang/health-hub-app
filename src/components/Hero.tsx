import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import About1 from "@/components/images/about1.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-4">
          <div className="text-center mb-8">
            {" "}
            {/* Centered and added margin bottom */}
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">
              What&apos;s New
            </h1>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Breaded Delight
            </h2>
          </div>
          <div className="text-center mb-8 max-w-md mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              Rich in vegetables, ready in 10 minutes and ultra-gourmet: try it
              without delay! To be found in the fresh vegetable catering
              section.
            </p>
          </div>
          <Button className="group h-auto rounded-full bg-red-500 px-8 py-3 text-base font-semibold shadow-lg shadow-red-500/30 transition-all hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/40">
            Discover them here!
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Image column */}
        <div className="flex w-full justify-center md:w-3/5">
          <div className="float-rotate relative">
            <Image
              src={About1.src}
              height={1000}
              width={1000}
              alt="Breaded Delight dish"
              className="w-full max-w-md drop-shadow-2xl md:max-w-xl"
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatRotate {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(0px) rotate(8deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(0px) rotate(-8deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .float-rotate {
          animation: floatRotate 8s ease-in infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
