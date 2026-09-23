import Image from "next/image";

const Ingredients = ({
  ingredients,
}: {
  ingredients: {
    name: string;
    ingredientImage?: string;
    quantity: string;
  }[];
}) => {
  return (
    <ul className="flex flex-col divide-y divide-stone-100">
      {ingredients.map((ing) => (
        <li
          key={ing.name}
          className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
        >
          {ing.ingredientImage ? (
            <Image
              src={ing.ingredientImage}
              alt=""
              height={32}
              width={32}
              className="rounded-full object-cover shrink-0 bg-stone-100"
            />
          ) : (
            <span className="flex items-center justify-center h-8 w-8 rounded-full shrink-0 bg-orange-100 text-orange-600 text-sm font-semibold">
              {ing.name.charAt(0).toUpperCase()}
            </span>
          )}
          <span className="text-sm text-stone-800 flex-1">{ing.name}</span>
          <span className="text-sm font-semibold text-stone-500">
            {ing.quantity}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Ingredients;
