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

export default function CreateRecipe_vmhb_s5({
  createRecipeForm,
}: Props): JSX.Element {
  return (
    <>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Tags</FormLabel>
              <FormControl>
                <Input placeholder="Tags" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="attachment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Attachment <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Attachment" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
