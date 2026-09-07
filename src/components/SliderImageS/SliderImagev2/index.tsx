"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";

interface ImageSliders {
  foodImages: string[];
  title: string;
  className?: string;
}

const SliderImagev2: React.FC<ImageSliders> = ({ foodImages, title }) => {
  const [middleIndex, setMiddleIndex] = useState<number>(0);

  const goToPrevious = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === 0 ? foodImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setMiddleIndex((prevIndex) =>
      prevIndex === foodImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousIndex =
    middleIndex === 0 ? foodImages.length - 1 : middleIndex - 1;
  const nextIndex = middleIndex === foodImages.length - 1 ? 0 : middleIndex + 1;

  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-center lg:flex xl:flex">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex justify-center items-center text-3xl font-bold p-2">
            <Button onClick={goToPrevious} className="sm:hidden rounded-full">
              {"<"}
            </Button>
            <Button onClick={goToNext} className="sm:hidden rounded-full">
              {">"}
            </Button>
          </div>
        </div>
        <div className="flex-col justify-center items-center ">
          <div className="hidden justify-end items-center gap-2 pb-2 lg:flex">
            {/* Add previous and next buttons */}
            <Button onClick={goToPrevious} className="rounded-full bg-red-500">
              {"<"}
            </Button>
            <Button onClick={goToNext} className="rounded-full bg-red-500">
              {">"}
            </Button>
          </div>
          {/* masalah di flex */}
          <div className="flex flex-col justify-center items-center gap-3 z-0 lg:flex lg:flex-row">
            {/* Render the three images */}
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={foodImages[previousIndex]}
                alt="Previous Slider"
                className="h-auto rounded-xl "
                style={{
                  maxHeight: "55vh",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              {/* <h2
                style={{
                  position: "absolute",
                  bottom: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
                className="text-2xl font-bold"
              >
                Spaghetti lasagne
              </h2> */}
              {/* <div
                className="flex gap-2"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "20%",
                }}
              >
                <Button className="rounded-full">logo</Button>
                <h1 className="flex justify-center items-center">Easy</h1>
              </div> */}
              {/* <div
                className="flex gap-2"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "20%",
                }}
              >
                <Button className="rounded-full">logo</Button>
                <h1 className="flex justify-center items-center">20Min</h1>
              </div> */}
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={foodImages[middleIndex]}
                alt="Previous Slider"
                className="h-auto rounded-xl "
                style={{
                  maxHeight: "55vh",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <h2
                style={{
                  position: "absolute",
                  bottom: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
                className="text-2xl font-bold"
              >
                Spaghetti lasagne
              </h2>
              <div
                className="flex gap-2"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "20%",
                }}
              >
                <Button className="rounded-full">logo</Button>
                <h1 className="flex justify-center items-center">Easy</h1>
              </div>
              <div
                className="flex gap-2"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "20%",
                }}
              >
                <Button className="rounded-full">logo</Button>
                <h1 className="flex justify-center items-center">20Min</h1>
              </div>
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={foodImages[nextIndex]}
                alt="Previous Slider"
                className="h-auto rounded-xl "
                style={{
                  maxHeight: "55vh",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <h2
                style={{
                  position: "absolute",
                  bottom: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "100%",
                }}
                className="text-2xl font-bold"
              >
                Spaghetti lasagne
              </h2>
              <div
                className="flex gap-2"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "20%",
                }}
              >
                <Button className="rounded-full">logo</Button>
                <h1 className="flex justify-center items-center">Easy</h1>
              </div>
              <div
                className="flex gap-2"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 1,
                  margin: "0",
                  padding: "0",
                  width: "20%",
                }}
              >
                <Button className="rounded-full">logo</Button>
                <h1 className="flex justify-center items-center">20Min</h1>
              </div>
            </div>

            {/* <img
              src={foodImages[middleIndex]}
              alt="Middle Slider"
              className=" h-auto rounded-xl lg:w-1/3"
              style={{ maxHeight: "55vh" }}
            />
            <img
              src={foodImages[nextIndex]}
              alt="Next Slider"
              className=" h-auto rounded-xl lg:w-1/3"
              style={{ maxHeight: "55vh" }}
            /> */}
            <div className="flex justify-center items-center p-5 lg:hidden">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImagev2;
