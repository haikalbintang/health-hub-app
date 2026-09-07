import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

interface Props {
  createRecipeForm: any;
}

export default function CreateRecipe_vmhb_s2({
  createRecipeForm,
}: Props): JSX.Element {
  return (
    <>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Category <span className="text-red-600">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Your Recipe's Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="indo">indo</SelectItem>
                  <SelectItem value="indon">indon</SelectItem>
                  <SelectItem value="indone">indone</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>choose one</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Type <span className="text-red-600">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Your Recipe's Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="indo">indo</SelectItem>
                  <SelectItem value="indon">indon</SelectItem>
                  <SelectItem value="indone">indone</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>choose one</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Origin <span className="text-red-600">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Your Recipe's Origin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="indo">indo</SelectItem>
                  <SelectItem value="indon">indon</SelectItem>
                  <SelectItem value="indone">indone</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>choose one</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <h2>&mdash;&mdash;&mdash;&mdash;</h2>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="servings"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                Servings
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Servings"
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormDescription>number of people</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mt-4">
        <FormField
          control={createRecipeForm.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Budget</FormLabel>
              <FormControl>
                <Input
                  placeholder="Budget"
                  {...field}
                  type="text"
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value)) {
                      field.onChange(value);
                    }
                  }}
                />
              </FormControl>
              <FormDescription>in USD$</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
