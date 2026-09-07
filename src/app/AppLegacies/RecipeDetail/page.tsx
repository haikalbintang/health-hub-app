"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbars/Navbar";
import RecipeHeroPage from "@/components/RecipeHeroPage";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import CommentSections from "@/components/CommentSection";
import KitchenTools from "@/components/KitchenTools";
import SliderImagev2 from "@/components/SliderImageS/SliderImagev2";
import HeroPage from "@/components/For_HeroSection/HeroPage";
import { chefMainCard } from "@/data";
import { recipeDetailCards } from "@/data";
import Food1 from "../../components/images/sliderImagesv2/food1.jpg";
import Food2 from "../../components/images/sliderImagesv2/food2.jpg";
import Food3 from "../../components/images/sliderImagesv2/food3.jpg";
import Food4 from "../../components/images/sliderImagesv2/food4.jpg";

import facebooksvg from "../../components/images/svg/317727_facebook_social media_social_icon.svg";
import tiktoksvg from "../../components/images/svg/tiktok-logo-logo-svgrepo-com.svg";
import knife from "../../components/images/cookingtools/cleaver-butcher-svgrepo-com.svg";
import { Button } from "@/components/ui/button";

export default function Recipees() {
  const truncate = (str: string) => {
    if (str.length > 100) {
      return str.substring(0, 150) + "...";
    } else {
      return str;
    }
  };
  const images: string[] = [Food1.src, Food2.src, Food3.src, Food4.src];
  return (
    <div className=" justify-center items-center">
      <Navbar />
      <RecipeHeroPage images={images} />
      <div className="lg:flex justify-around items-center pt-5 px-20">
        <div className="lg:flex justify-center items-center gap-10">
          {recipeDetailCards.map((card: any) => (
            <div className="flex justify-center items-center gap-4">
              <div className="flex  gap-5">
                <div>
                  <Button className="bg-amber-700">
                    Category : {card.foodCategory}
                  </Button>
                </div>
                <div>
                  <Button className="bg-amber-700">
                    Origin : {card.foodOrigin}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-around items-center lg:gap-12 lg:pl-20 gap-5 pt-2 lg:pt-0">
          <div>
            <Button className="bg-amber-700">
              Nutri Score :{" "}
              <span className="text-gradients font-bold">8.0</span>
            </Button>
          </div>
          <div>
            <Button className="bg-amber-700">I love This Recipe</Button>
          </div>
          <div>
            <Button className="bg-amber-700">Share this Recipe!</Button>
          </div>
        </div>
        <div className="justify-center items-center ">
          {chefMainCard.map((card: any) => (
            <div className="flex justify-start items-center gap-2">
              <img
                src={card.chefImage}
                alt=""
                className=" h-20 w-20 rounded-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-amber-700">
                  {card.name}
                </h1>
                {chefMainCard[0].socialMedia.map((social: any) => (
                  <div className="flex justify-start items-center gap-2">
                    <Button>+ Follow</Button>
                    <a href={social.facebook}>
                      <img
                        src={facebooksvg.src}
                        alt=""
                        className="w-6 h-6 rounded-lg"
                      />
                    </a>
                    <a href={social.tiktok}>
                      <img
                        src={tiktoksvg.src}
                        alt=""
                        className="w-6 h-6 rounded-lg"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {recipeDetailCards.map((card: any) => (
        <div className="flex flex-col justify-center items-center lg:p-12">
          <h1 className="text-xl font-bold">Recipe Summary :</h1>
          <h1 className="flex justify-center items-center px-36">
            {card.summary}
          </h1>
        </div>
      ))}
      <div className="lg:flex lg:pl-20">
        <div className="lg:w-1/3">
          <Ingredients className="flex justify-items-center items-center" />
        </div>
        <div className="lg:w-2/3 pt-10 px-5">
          <Instructions className="" />
        </div>
      </div>
      <div className="lg:flex pt-10 lg:px-20  justify-center items-center gap-3">
        {recipeDetailCards[0].tags.map((tag: any) => (
          <div>
            <h1 className="bg-slate-200 p-5 gap-2 rounded-xl w-full shadow-lg shadow-slate-500 ">
              {tag}
            </h1>
          </div>
        ))}
        {/* <KitchenTools /> */}
      </div>
      <div className="lg:flex lg:pl-20 lg:pt-5">
        <div className="lg:w-1/3 ">
          <CommentSections />
        </div>
        <div className="lg:w-2/3  lg:flex-col justify-start items-start pt-5 pr-10">
          <SliderImagev2
            foodImages={images}
            title="Recipe Galery:"
            className="h-1/3"
          />
        </div>
      </div>
    </div>
  );
}
