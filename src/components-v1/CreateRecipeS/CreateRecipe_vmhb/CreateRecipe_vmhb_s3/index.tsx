import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  createRecipeForm: any;
}

export default function CreateRecipe_vmhb_s3({
  createRecipeForm,
}: Props): JSX.Element {
  return (
    <>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Ingredients <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingredients" {...field} />
              </FormControl>
              <FormDescription>please include the units</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Instructions <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Instructions" {...field} />
              </FormControl>
              <FormDescription>start from step 1</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="cookTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Cook Time <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Cook Time" {...field} type="number"
                  onChange={(e) => field.onChange(parseInt(e.target.value))} />
              </FormControl>
              <FormDescription>in minutes</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="complexity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Complexity <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Complexity" {...field} />
              </FormControl>
              <FormDescription>choose one</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
