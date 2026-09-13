import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cards } from "@/data/data";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
// import { chefMainCard, chefMainCard2 } from "@/data";

interface Props {
  recipeCategoryName?: string;
  //   recipeCategoryType: string;
}
const WeeklyRecipes_vmhb: React.FC<Props> = ({
  //   recipeCategoryType,
  recipeCategoryName,
}) => {
  const [showCount, setShowCount] = useState(4);

  const toggleShowMore = () => {
    setShowCount((prevCount) => prevCount + 4);
  };

  const toggleShowLess = () => {
    setShowCount((prevCount) => Math.max(4, prevCount - 4));
  };
  return (
    <div className="item-list">
      <h2 className="text-gray-800 text-2xl font-semibold mt-5 mb-3">
        Weekly Recipes
      </h2>

      <ul className="flex flex-wrap justify-around items-center my-3">
        {cards.slice(0, 5).map((card) => (
          <li key={card.id}>
            <Card data={card} size="medium" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyRecipes_vmhb;
