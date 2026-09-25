import React, { useEffect, useState } from "react";
import Select, { type StylesConfig } from "react-select";
import RecipeCard from "@/components/RecipeCard";
import useFetch from "@/hooks/useFetch";
import api, { getApiErrorMessage } from "@/utils/api";
import { RecipeDetailType } from "@/types/type";

interface CategoryType {
  category: string;
  id: number;
}

const selectStyles: StylesConfig<CategoryType, true> = {
  container: (base) => ({
    ...base,
    width: "100%",
  }),
  control: (base, state) => ({
    ...base,
    minHeight: "48px",
    border: `1px solid ${state.isFocused ? "#f97316" : "#fdba74"}`,
    borderRadius: "0.75rem",
    backgroundColor: "#ffffff",
    boxShadow: state.isFocused
      ? "0 0 0 3px rgba(249, 115, 22, 0.15)"
      : "0 1px 2px rgba(124, 45, 18, 0.04)",
    fontFamily: "inherit",
    "&:hover": {
      borderColor: "#fb923c",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    flexWrap: "wrap",
    alignItems: "center",
    gap: "6px",
    padding: "6px 10px",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#ffedd5",
    border: "1px solid #fed7aa",
    borderRadius: "9999px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    padding: "4px 2px 4px 9px",
    color: "#9a3412",
    fontSize: "0.8125rem",
    fontWeight: 600,
  }),
  multiValueRemove: (base) => ({
    ...base,
    padding: "4px",
    color: "#c2410c",
    borderRadius: "9999px",
    "&:hover": {
      backgroundColor: "#fdba74",
      color: "#7c2d12",
    },
    "&:focus": {
      backgroundColor: "#fdba74",
      color: "#7c2d12",
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 50,
    marginTop: "6px",
    overflow: "hidden",
    border: "1px solid #fed7aa",
    borderRadius: "0.75rem",
    boxShadow: "0 12px 30px rgba(124, 45, 18, 0.12)",
  }),
  menuList: (base) => ({
    ...base,
    padding: "4px",
  }),
  option: (base, state) => ({
    ...base,
    padding: "10px 12px",
    borderRadius: "0.5rem",
    color: state.isSelected ? "#9a3412" : "#374151",
    backgroundColor: state.isSelected
      ? "#ffedd5"
      : state.isFocused
        ? "#fff7ed"
        : "transparent",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fff7ed",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
    fontSize: "0.875rem",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    height: "24px",
    backgroundColor: "#fed7aa",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "8px",
    color: "#c2410c",
    "&:hover": {
      color: "#9a3412",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: "8px",
    color: "#c2410c",
    "&:hover": {
      color: "#9a3412",
    },
  }),
  input: (base) => ({
    ...base,
    color: "#374151",
  }),
  loadingIndicator: (base) => ({
    ...base,
    color: "#ea580c",
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: "#6b7280",
  }),
};

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>(
    [],
  );
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useFetch<CategoryType[]>("/feeds/categories/all");
  const [recipes, setRecipes] = useState<RecipeDetailType[]>([]);
  const [recipesLoading, setRecipesLoading] = useState(false);
  const [recipesError, setRecipesError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (selectedCategories.length === 0) {
      setRecipes([]);
      setRecipesError(null);
      setRecipesLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setRecipes([]);
    setRecipesError(null);
    setRecipesLoading(true);

    Promise.all(
      selectedCategories.map(({ id }) =>
        api.get<RecipeDetailType[]>(`/feeds/recipes/filter-by/category/${id}`),
      ),
    )
      .then((responses) => {
        if (cancelled) return;

        const recipesById = new Map<number, RecipeDetailType>();
        responses.forEach((response) => {
          response.data.forEach((recipe) => recipesById.set(recipe.id, recipe));
        });
        setRecipes(Array.from(recipesById.values()));
      })
      .catch((error) => {
        if (!cancelled) {
          setRecipesError(
            getApiErrorMessage(
              error,
              "Failed to fetch recipes. Please try again.",
            ),
          );
        }
      })
      .finally(() => {
        if (!cancelled) setRecipesLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedCategories]);

  return (
    <div className="item-list">
      {categoriesLoading && (
        <p className="text-gray-500">Loading categories...</p>
      )}
      {categoriesError && (
        <p role="alert" className="text-red-600">
          {categoriesError}
        </p>
      )}

      {!categoriesLoading && !categoriesError && categories?.length ? (
        <div className="w-full rounded-2xl border border-orange-100 bg-orange-100 p-4 z-50">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <label
                htmlFor="category-filter"
                className="text-2xl font-semibold text-gray-800"
              >
                Filter by category
              </label>
              <p className="mt-1 text-sm text-gray-500">
                Choose one or more categories to narrow the recipes.
              </p>
            </div>
            <span className="rounded-full bg-orange-200 px-3 py-1 text-md font-semibold text-orange-900">
              {selectedCategories.length} selected
            </span>
          </div>
          <Select<CategoryType, true>
            id="category-filter"
            isMulti
            options={categories}
            value={selectedCategories}
            onChange={(selected) =>
              setSelectedCategories(Array.from(selected ?? []))
            }
            getOptionLabel={(option) => option.category}
            getOptionValue={(option) => String(option.id)}
            placeholder="Select one or more categories"
            isClearable
            closeMenuOnSelect={false}
            className="w-full"
            styles={selectStyles}
            aria-label="Select categories"
          />
        </div>
      ) : null}

      {!categoriesLoading && !categoriesError && categories?.length === 0 && (
        <p className="text-gray-500">No categories found.</p>
      )}

      {selectedCategories.length ? (
        <section className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Recipes in{" "}
            {selectedCategories.map(({ category }) => category).join(", ")}
          </h3>

          {recipesLoading && (
            <p className="mt-3 text-gray-500">Loading recipes...</p>
          )}
          {recipesError && (
            <p role="alert" className="mt-3 text-red-600">
              {recipesError}
            </p>
          )}

          {!recipesLoading && !recipesError && recipes.length ? (
            <ul className="mt-4 items-center grid grid-cols-5 gap-y-6 gap-x-9">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} size="medium" />
              ))}
            </ul>
          ) : null}

          {!recipesLoading && !recipesError && recipes.length === 0 && (
            <p className="mt-3 text-gray-500">No recipes found.</p>
          )}
        </section>
      ) : (
        <p className="mt-6 text-gray-500">
          Select one or more categories to view recipes.
        </p>
      )}
    </div>
  );
};

export default Categories;
