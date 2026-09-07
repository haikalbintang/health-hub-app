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

export default function Feeds_withCardNew() {
  // const [recipeData, setRecipeData] = useState<any[]>([]);

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
      title: "Sate Maranggi",
      nutriscore: 9.0,
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
      description: "Sosisnya dibakar, bukan digoreng ...",
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
      <div className="flex flex-wrap justify-center items-center mx-auto gap-2 mt-5">
        {recipeData.map((data, index) => (
          <Card_new
            key={index}
            title={data.title}
            nutriScore={data.nutriscore}
            rate={data.rating}
            like={data.like_count}
            complexity={data.complexity}
            description={data.description}
            attachment={data.attachment}
          />
        ))}
      </div>
    </div>
  );
}
