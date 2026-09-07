import React, { useState } from "react";
import MyProfile from "../../Profiles/MyProfile";
import MyRecipe from "../../MyRecipe";
import CreateRecipe from "../../CreateRecipeS/CreateRecipe";
import Security from "../../Security";
import CreateRecipe_vmhb from "@/components/CreateRecipeS/CreateRecipe_vmhb";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar_vmhb: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Home",
    "My Profile",
    "My Recipe",
    "Create Recipe",
    "Security",
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center px-2 py-5 my-auto">
      <div className="rounded-xl h-full bg-slate-800 text-white w-44 ">
        <div className="p-6 px-4">
          {categories.map((category) => (
            <h1
              className={`py-2 px-4 my-4 cursor-pointer ${
                selectedCategory === category
                  ? "text-orange-200"
                  : "text-orange-50"
              } hover:text-orange-200 ${
                selectedCategory === category ? "bg-slate-700 rounded-xl" : ""
              }`}
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </h1>
          ))}
        </div>
      </div>
      <div className="w-3/5 p-5 mx-auto">
        {selectedCategory === "My Profile" && <MyProfile />}
        {selectedCategory === "My Recipe" && <MyRecipe />}
        {selectedCategory === "Create Recipe" && <CreateRecipe_vmhb />}
        {selectedCategory === "Security" && <Security />}
      </div>
    </div>
  );
};

export default Sidebar_vmhb;
