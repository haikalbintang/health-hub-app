"use client";
import React, { useState, useEffect } from "react";
import ModalRecipe from "@/components/Modals/ModalRecipe";
import Category_vmhb from "@/components/RecipesFeeds copy/Category_vmhb";
import Card_new from "@/components/Cards/Card_new";

import food1 from "@/components/images/sliderImagesv2/food1.jpg";
import food2 from "@/components/images/sliderImagesv2/food2.jpg";
import food3 from "@/components/images/sliderImagesv2/food3.jpg";
import food4 from "@/components/images/sliderImagesv2/food4.jpg";
import axios, { AxiosResponse } from "axios";
import Card_new_v2 from "@/components/Cards/Card_new_v2";
import useFetchRecipe from "@/hooks/UseFetchRecipe";

export interface RecipeData {
  id: number;
  title: string;
  description: string;
  cooktime: string;
  complexity: string;
  budget: string;
  nutriscore: string;
  instruction: string;
  type: string;
  origin: string;
  tag: string[];
  servings: number;
  nutriScore: number;
  attachment: string;
  author_id: number;
}
export default function Feeds_withCardNew_v2() {
  // const [recipeData, setRecipeData] = useState<any[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeData | null>(null);
  const [showRecipeModal, setShowRecipeModal] = useState(false);

  const { recipes, error, refetchRecipes } = useFetchRecipe();

  const handleCardClick = (recipe: RecipeData) => {
    setSelectedRecipe(recipe);
    setShowRecipeModal(true);
    console.log(setSelectedRecipe);
  };

  const recipeData = [
    {
      title: "Sate Maranggi",
      nutriscore: 9.0,
      rating: 4.7,
      like_count: 123,
      complexity: "medium",
      description: "Sate Maranggi bukan berasal dari ...",
      attachment: food1.src,
    },
    {
      title: "Sate Maranggi Special Deluxe Edition New Variant",
      nutriscore: 9.1,
      rating: 4.7,
      like_count: 123,
      complexity: "medium",
      description: "Sate Maranggi bukan berasal dari ...",
      attachment: food1.src,
    },
    {
      title: "Sosis Bakar",
      nutriscore: 9.5,
      rating: 4.8,
      like_count: 124,
      complexity: "easy",
      description:
        "Sosisnya dibakar, bukan digoreng ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non necessitatibus expedita dolor deleniti amet sint perspiciatis corporis itaque aperiam modi minima blanditiis qui possimus dolorum, sit eum nostrum repellat. Delectus!",
      attachment: food2.src,
    },
  ];

  // useEffect(() => {
  //   console.log("useEffect");
  //   const fetchData = async () => {
  //     try {
  //       console.log("try");
  //       const response = await axios.get(
  //         "http://127.0.0.1:5000/feeds/recipes/all"
  //       );
  //       console.log("setelah await");
  //       console.log(response);
  //       console.log(response.data);
  //       setRecipeData(response.data);
  //       // Handle response data here
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle error here
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mx-auto gap-2 my-4">
        {recipeData.map((data, index) => (
          <Card_new_v2
            key={index}
            title={data.title}
            nutriScore={data.nutriscore}
            rate={data.rating}
            like={data.like_count}
            complexity={data.complexity}
            description={data.description}
            attachment={data.attachment}
            setShowRecipeModal={() =>
              handleCardClick(data as unknown as RecipeData)
            }
          />
        ))}
      </div>
      {showRecipeModal && selectedRecipe && (
        <ModalRecipe
          recipe={selectedRecipe}
          showModal={showRecipeModal}
          setShowModal={setShowRecipeModal}
        />
      )}
    </div>
  );
}
