import food1 from "../components/images/sliderImagesv2/authentic-italian-pasta.jpg";
import food2 from "../components/images/sliderImagesv2/food2.jpg";
import food3 from "../components/images/sliderImagesv2/food3.jpg";
import food4 from "../components/images/sliderImagesv2/food4.jpg";

import chef1 from "../components/images/chefimage/Joel-Robuchon.jpg";
import chef2 from "../components/images/chefimage/jemieolif.jpg";
import chef3 from "../components/images/chefimage/gordonram.jpeg";
import chef4 from "../components/images/chefimage/Pierre-Gagnaire.jpg";

import tools1 from "../components/images/cookingtools/cleaver-butcher-svgrepo-com.svg";
import tools2 from "../components/images/cookingtools/grater-svgrepo-com.svg";
import tools3 from "../components/images/cookingtools/pizza-knife-svgrepo-com.svg";
import tools4 from "../components/images/cookingtools/spatula-svgrepo-com.svg";

export const recipeDetailCards = [
  {
    title: "Spaghetti Lasagna",
    complexity: "Easy",
    time: "20Min",
    foodImage: food1.src,
    servings: "4",
    foodCategory: "Pasta",
    foodOrigin: "Italy",
    summary:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt doloribus eveniet amet a distinctio quidem earum pariatur repellat id dolorum molestiae perspiciatis nobis ullam cumque, tenetur impedit assumenda rerum!",

    ingredients: [
      {
        name: "Pasta",
        ingredientsImage: food1.src,
        quantity: "500g",
      },
      {
        name: "Tomato",
        ingredientsImage: food1.src,
        quantity: "500g",
      },
      {
        name: "Olive oil",
        ingredientsImage: food1.src,
        quantity: "20ml",
      },
      {
        name: "Salt",
        ingredientsImage: food1.src,
        quantity: "500g",
      },
      {
        name: "Pepper",
        ingredientsImage: food1.src,
        quantity: "150g",
      },
    ],
    instructions: [
      {
        1: "Cook the Pasta Bring a large pot of salted water to a boil. Cook the pasta according to the package instructions until al dente. Drain and set aside, reserving about 1/2 cup of pasta water.",
        2: " Cut the tomatoes into small cubes and set aside. In a large skillet, heat the olive oil over medium heat. Add the garlic, and cook for 1 minute until fragrant.",
        3: " Add the tomato cubes, salt, pepper, and the pasta water. Mix well and cook for 5-7 minutes until the sauce has thickened.",
        4: " Add the pasta to the sauce and mix well. Serve immediately.",
      },
    ],
    nuttritions: [
      {
        name: "Calories",
        value: "200g",
      },
      {
        name: "Protein",
        value: "20g",
      },
      {
        name: "Fat",
        value: "20g",
      },
      {
        name: "Carbs",
        value: "20g",
      },
    ],
    tags: [
      "#Pasta",
      "#Spaghetti",
      "#Italian",
      "#Easy",
      "#5Min",
      "#tasty",
      "#healthy",
    ],
  },
];

export const cards = [
  {
    title: "Spaghetti Lasagna",
    complexity: "Easy",
    time: "20Min",
    foodImage: food1.src,
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Medium",
    time: "5Min",
    foodImage: food2.src,
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Hard",
    time: "1Hour",
    foodImage: food3.src,
    role: "chef",
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Easy",
    time: "25Min",
    foodImage: food4.src,
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Easy",
    time: "20Min",
    foodImage: food1.src,
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Medium",
    time: "5Min",
    foodImage: food2.src,
    role: "chef",
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Hard",
    time: "1Hour",
    foodImage: food3.src,
  },
  {
    title: "Spaghetti Lasagna",
    complexity: "Easy",
    time: "25Min",
    foodImage: food4.src,
  },
];

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
        category: "Healty recipe",
        image: food1.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Pizza Margharita",
        tags: ["#Easy", " #Spicy", " #Vegan"],
      },

      {
        category: "Main Dish",
        image: food1.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Pizza Margharita",
        tags: ["#Easy", " #Spicy", " #Vegan"],
      },
      {
        category: "Side Dish",
        image: food2.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Spaghetti Oglio Olio",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
      {
        category: "Appetizer",
        image: food3.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Fried Chicken",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
      {
        category: "Bevarage",
        image: food4.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "lemon squash",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
      {
        category: "Dessert",
        image: food2.src,
        recipeDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
        recipeName: "Gado Gado jakarta",
        tags: ["#Normal", " #Low Sugar", " #High protein"],
      },
    ],
    kitchenTools: [
      { toolsName: "knife kitchen", toolsImage: tools1.src },
      { toolsName: "knife", toolsImage: tools2.src },
      { toolsName: "knife", toolsImage: tools3.src },
      { toolsName: "knife", toolsImage: tools4.src },
      { toolsName: "knife", toolsImage: tools1.src },
      { toolsName: "knife", toolsImage: tools2.src },
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

export const chefMainCard2 = [
  {
    chefImage: chef4.src,
    name: "Joel Robuchon",
    firstName: "Joel",
    lastName: "Robuchon",
    email: "nQqjM@example.com",
    phoneNumber: "081234567890",
    country: "Indonesia",
    city: "Jakarta",
    postalCode: "12345",
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
    address: "Jakarta, Indonesia",
    sideList: {
      category: {
        MyRecipe: [
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
        ],
        FollowedRecipes: [
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
        ],
        MyFavoriteRecipes: [
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
          {
            recipeName: "Pizza Margharita",
            image: food1.src,
            recipeDescription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
            tags: ["#Easy", "#Spicy", "#Vegan"],
            difficulty: "easy",
            servings: "2Person",
            nutriScore: "9.0",
          },
        ],
      },
    },
    recipe: [
      {
        category: {
          WeeklyRecipes: [
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              difficulty: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              difficulty: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              difficulty: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              difficulty: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              difficulty: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              difficulty: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
          HealtyRecipes: [
            {
              recipeName: "Pizza Margharita",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
          Desserts: [
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
          MainDishes: [
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
          Appetizers: [
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
          Beverages: [
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
          SideDishes: [
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
            {
              recipeName: "Pizza olio oglio",
              image: food1.src,
              recipeDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est?",
              tags: ["#Easy", "#Spicy", "#Vegan"],
              complexity: "easy",
              servings: "2Person",
              nutriScore: "9.0",
            },
          ],
        },
      },
    ],
    kitchenTools: [
      { toolsName: "knife kitchen", toolsImage: tools1.src },
      { toolsName: "knife", toolsImage: tools2.src },
      { toolsName: "knife", toolsImage: tools3.src },
      { toolsName: "knife", toolsImage: tools4.src },
      { toolsName: "knife", toolsImage: tools1.src },
      { toolsName: "knife", toolsImage: tools2.src },
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
