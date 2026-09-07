import React, { useState, useEffect } from "react";
import axios from "axios";

export interface Recipe {
  title: string;
  description: string;
  cooktime: string;
  complexity: string;
  servings: string;
  budget: string;
  nutriscore: string;
  instruction: string;
  type: string;
  origin: string;
  tag: string[];
  attachment: string;
  category: string;
  id: number;
  author_id: number;
}

export default function useFetchRecipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/feeds/recipes/all"
      );
      console.log("tes", response);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to fetch recipes. Please try again.");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const refetchRecipes = async () => {
    await fetchRecipes();
  };

  return { recipes, error, refetchRecipes };
}
