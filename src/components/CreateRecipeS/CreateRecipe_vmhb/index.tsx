import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useMultistepForm from "@/hooks/useMultistepForm";
import CreateRecipe_vmhb_s1 from "@/components/CreateRecipeS/CreateRecipe_vmhb/CreateRecipe_vmhb_s1";
import CreateRecipe_vmhb_s2 from "@/components/CreateRecipeS/CreateRecipe_vmhb/CreateRecipe_vmhb_s2";
import CreateRecipe_vmhb_s3 from "@/components/CreateRecipeS/CreateRecipe_vmhb/CreateRecipe_vmhb_s3";
import CreateRecipe_vmhb_s4 from "@/components/CreateRecipeS/CreateRecipe_vmhb/CreateRecipe_vmhb_s4";
import CreateRecipe_vmhb_s5 from "@/components/CreateRecipeS/CreateRecipe_vmhb/CreateRecipe_vmhb_s5";
import axios from "axios";

const createRecipeFormSchema = z
  .object({
    title: z.string(),
    description: z.string().max(300),
    nutriScore: z.number(),
    cookTime: z.number(),
    complexity: z.string(),
    servings: z.number(),
    budget: z.number(),
    instructions: z.string(),
    ingredients: z.string(),

    category: z.string(),
    type: z.string(),
    origin: z.string(),
    tag: z.string(),

    attachment: z.string(),

    // servingPerContainer: z.number(),
    // servingSize: z.string(),

    calories: z.number(),
    totalFat: z.number(),
    totalCarbohydrate: z.number(),
    totalSugar: z.number(),
    cholesterol: z.number(),
    protein: z.number(),
    vitaminD: z.number(),

    sodium: z.number(),
    calcium: z.number(),
    potassium: z.number(),
    iron: z.number(),
  })
  .required();

export default function CreateRecipe_vmhb() {
  const createRecipeForm = useForm<z.infer<typeof createRecipeFormSchema>>({
    resolver: zodResolver(createRecipeFormSchema),
    defaultValues: {
      title: undefined,
      description: "",

      category: undefined,
      type: undefined,
      origin: undefined,
      servings: 1,
      budget: 0,

      ingredients: undefined,
      instructions: undefined,
      cookTime: 0,
      complexity: undefined,

      //   servingPerContainer: undefined,
      //   servingSize: "",

      nutriScore: undefined,

      calories: 0,
      totalFat: 0,
      totalCarbohydrate: 0,
      totalSugar: 0,
      cholesterol: 0,
      protein: 0,
      vitaminD: 0,

      sodium: 0,
      calcium: 0,
      potassium: 0,
      iron: 0,

      tag: "",
      attachment: undefined,
    },
  });

  async function postRecipe() {
    const authToken = localStorage.getItem("access_token");
    try {
      if (authToken) {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const recipeData = createRecipeForm.getValues();
        const response = await axios.post(
          "http://127.0.0.1:5000/recipes/create",
          {
            title: recipeData.title,
            description: recipeData.description,
            nutriscore: recipeData.nutriScore,
            cooktime: recipeData.cookTime,
            complexity: recipeData.complexity,
            servings: recipeData.servings,
            budget: recipeData.budget,
            instruction: recipeData.instructions,
            view_count: 0,
            categoriy: recipeData.category,
            type: recipeData.type,
            origin: recipeData.origin,
            tag: [recipeData.tag],
          },
          { headers }
        );
        console.log("123", response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmit(values: z.infer<typeof createRecipeFormSchema>) {
    console.log("Form submitted!");
    console.log(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await postRecipe();
    } catch (error) {
      console.error(error);
    }
  }

  const { currentStepIndex, steps, isFirstStep, isLastStep, back, next, step } =
    useMultistepForm([
      <CreateRecipe_vmhb_s1 key={0} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s2 key={1} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s3 key={2} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s4 key={3} createRecipeForm={createRecipeForm} />,
      <CreateRecipe_vmhb_s5 key={4} createRecipeForm={createRecipeForm} />,
    ]);

  return (
    <>
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Post Recipe Form</h1>
          <h2 className="text-lg font-medium">
            step{" "}
            <span className="text-xl font-bold">{currentStepIndex + 1}</span> /{" "}
            {steps.length}
          </h2>
        </div>
        <div className="mt-8">
          <Form {...createRecipeForm}>
            <form
              onSubmit={createRecipeForm.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {step}
              <div className="flex justify-between">
                {!isFirstStep ? (
                  <Button type="button" onClick={back}>
                    {"<"} Back ({currentStepIndex})
                  </Button>
                ) : (
                  <Button type="button" onClick={back} disabled>
                    Back ({currentStepIndex})
                  </Button>
                )}
                {!isLastStep && (
                  <Button type="button" onClick={next}>
                    Next ({currentStepIndex + 2}) {">"}
                  </Button>
                )}
                {isLastStep && (
                  <div className="flex justify-end">
                    <Button
                      className="bg-red-500 hover:bg-red-600"
                      type={"submit"}
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
