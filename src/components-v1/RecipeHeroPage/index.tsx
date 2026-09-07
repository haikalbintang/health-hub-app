import React from "react";
import { Button } from "../ui/button";
import Food1 from "../images/sliderImagesv2/food1.jpg";
import { recipeDetailCards } from "@/data";
interface ImageProps {
  images: string[];
}

export default function RecipeHeroPage({ images }: ImageProps) {
  return (
    <div className="mt-1 flex flex-col justify-center items-center p-1">
      {/* <div
        className="flex justify-center items-center gap-2 bg-orange-800 w-full h-16 text-white  lg:rounded-t-3xl"
        style={{ maxWidth: "150vh" }}
      >
        {recipeDetailCards.map((recipe: any) => (
          <div className="flex justify-center items-center gap-2">
            <h1>Welcome {">"}</h1>
            <h1>The Recipes {">"}</h1>
            <h1>{recipe.title}</h1>
          </div>
        ))}
      </div> */}
      <div className="relative w-full flex justify-center items-center rounded-3xl overflow-hidden">
        <picture
          className="w-full h-full object-cover rounded-3xl"
          style={{
            maxHeight: "50vh",
            // maxWidth: "150vh",
            display: "block",
            objectPosition: "top",
          }}
        >
          <img src={recipeDetailCards[0].foodImage} alt="" />
        </picture>
        <div className="absolute inset-0 min-w-72 gap-6 flex flex-col justify-center items-center text-center text-white m-5">
          {recipeDetailCards.map((recipe: any) => (
            <div key={recipe.id} className="mt-6 mb-4 sm:mt-28 sm:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl sm:tracking-wider font-bold">
                {recipe.title}
              </h1>
            </div>
          ))}
          {recipeDetailCards.map((recipe: any) => (
            <div
              key={recipe.id}
              className="w-1/4 h-1/4 sm:mt-10 lg:mt-7 flex justify-center items-center"
            >
              <div className="flex justify-center items-center rounded-xl bg-white lg:h-14 mx-auto">
                {/* White box */}
                <div className="flex items-center justify-center px-2 mx-auto">
                  <div className="flex flex-row items-center my-1 mr-4 text-slate-900">
                    <div className="rounded-full bg-slate-200  h-8 w-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                      </svg>
                    </div>
                    <div className="flex flex-row">
                      <h1 className="flex flex-row ml-1 font-medium text-sm sm:text-base">
                        {recipe.servings}People
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center  my-1 mr-4 text-slate-900">
                    <div className="rounded-full bg-slate-200  h-8 w-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                      </svg>
                    </div>
                    <div>
                      <h1 className="ml-1 font-medium text-sm sm:text-base">
                        {recipe.time}
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center  my-1 text-slate-900">
                    <div className="rounded-full bg-slate-200  h-8 w-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                      </svg>
                    </div>
                    <div>
                      <h1 className="ml-1 font-medium text-sm sm:text-base">
                        {recipe.complexity}
                      </h1>
                    </div>
                  </div>
                </div>
                {/* End of white box */}
              </div>
            </div>
          ))}
          {/* <Button
            className="bg-green-500 text-xl font-bold "
            style={{ position: "absolute", bottom: "-10%" }}
          >
            See The Other Recipes
          </Button> */}
        </div>
      </div>
    </div>
  );
}
