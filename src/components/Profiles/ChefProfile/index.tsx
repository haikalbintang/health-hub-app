import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import food1 from "@/components/images/sliderImagesv2/food1.jpg";
import food2 from "@/components/images/sliderImagesv2/food2.jpg";
import food3 from "@/components/images/sliderImagesv2/food3.jpg";
import food4 from "@/components/images/sliderImagesv2/food4.jpg";

import chef1 from "@/components/images/chefimage/Joel-Robuchon.jpg";
import chef2 from "@/components/images/chefimage/jemieolif.jpg";
import chef3 from "@/components/images/chefimage/gordonram.jpeg";
import chef4 from "@/components/images/chefimage/Pierre-Gagnaire.jpg";

interface Props {
  className?: string;
}
export const chefMainCard = [
  {
    chefImage: chef4.src,
    name: "Joel Robuchon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, mollitia iure voluptas earum porro aliquid cum quae quasi, sequi, laborum at et excepturi quam voluptate!",
    userRole: "Famous Chef",
    socialMedia: [
      {
        facebook: "https://www.facebook.com/",
        tiktok: "https://www.tiktok.com/",
        followers: "100k",
        following: "100k",
      },
    ],
    recipe: [
      {
        image: food1.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Pizza Margharita",
        tags: ["#Easy", " #Spicy"],
        likes: "100k",
      },
      {
        image: food2.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Spaghetti Oglio Olio",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
        likes: "100k",
      },
      {
        image: food3.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Fried Chicken",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
        likes: "100k",
      },
      {
        image: food4.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "lemon squash",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
        likes: "100k",
      },
      {
        image: food2.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Gado Gado jakarta",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
        likes: "100k",
      },
    ],
    chefCards: [
      {
        chefImage: chef3.src,
      },
      {
        chefImage: chef2.src,
      },
      {
        chefImage: chef1.src,
      },
      {
        chefImage: chef4.src,
      },
      {
        chefImage: chef2.src,
      },
      {
        chefImage: chef1.src,
      },
    ],
  },
];
const ChefProfile: React.FC<Props> = () => {
  const [startIndex, setStartIndex] = useState(0);

  const foodCards = [
    {
      title: "Spaghetti Lasagna",
      difficulty: "Easy",
      time: "20Min",
      foodImage: food1.src,
    },
    {
      title: "Spaghetti Lasagna",
      difficulty: "Medium",
      time: "5Min",
      foodImage: food2.src,
    },
    {
      title: "Spaghetti Lasagna",
      difficulty: "Hard",
      time: "1Hour",
      foodImage: food3.src,
      role: "chef",
    },
    {
      title: "Spaghetti Lasagna",
      difficulty: "Easy",
      time: "25Min",
      foodImage: food4.src,
    },
  ];

  const displayCards = chefMainCard[0].chefCards.slice(
    startIndex,
    startIndex + 3
  );
  const handleNext = () => {
    if (startIndex < foodCards.length - 3) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center items-center lg:py-5">
      <div className="flex flex-col justify-center items-center relative w-full h-full">
        {chefMainCard.map((chefCard, index) => (
          <div>
            <div className="w-full h-full">
              <img
                src={chefMainCard[0].chefImage}
                alt=""
                className="w-full h-full object-cover lg:rounded-tl-3xl overflow-hidden"
              />
            </div>

            <div className="hidden lg:flex  bgs-gradients w-full h-24 lg:rounded-bl-3xl ">
              <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:w-1/3 gap-2 ">
                {displayCards.map((subChefCard, subIndex) => (
                  <div key={subIndex} className="flex object-cover">
                    <img
                      key={subIndex + index}
                      src={subChefCard.chefImage}
                      alt=""
                      className="rounded-full shadow-2xl shadow-black object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-around items-center gap-3 pt-5 w-full">
                <Button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  className="rounded-full bg-red-500 hover:bg-red-600 pt-2 shadow-sm shadow-black"
                >
                  {"<"}
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={startIndex === foodCards.length - 3}
                  className="rounded-full bg-red-500 hover:bg-red-600 pt-2 shadow-sm shadow-black"
                >
                  {">"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefProfile;
