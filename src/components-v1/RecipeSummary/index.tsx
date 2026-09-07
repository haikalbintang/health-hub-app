import { recipeDetailCards } from "@/data";

export default function RecipeSummary({ recipeData }: any) {
  return (
    <div className="md:p-1 md:w-1/2 mt-4">
      <div className="flex flex-col justify-center items-center px-1 md:p-1 md:pt-2">
        <h1 className="text-sm sm:text-base md:text-sm justify-center items-center text-slate-800 px-1">
          <span className="text-lg font-bold text-slate-800">
            Recipe Summary:{" "}
          </span>
        </h1>
        <h1>{recipeData.description}</h1>
      </div>
    </div>
  );
}
