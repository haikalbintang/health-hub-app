import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  createRecipeForm: any;
}

export default function CreateRecipe_vmhb_s1({
  createRecipeForm,
}: Props): JSX.Element {
  return (
    <>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">
                Title <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Your Recipe's Title" {...field} />
              </FormControl>
              <FormDescription>must be unique</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">
                Description
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Your Recipe's Description" {...field} />
              </FormControl>
              <FormDescription>maximum of 300 characters</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
