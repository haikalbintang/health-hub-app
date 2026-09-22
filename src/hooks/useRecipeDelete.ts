import api from "@/utils/api";
import Swal from "sweetalert2";

const useRecipeDelete = () => {
  const handleDeleteRecipe = async () => {
    try {
      const response = await api.delete("/recipes/delete");
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Recipe deleted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
      return response.data;
    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: "Error",
        text: "Failed to delete recipe",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return { handleDeleteRecipe };
};

export default useRecipeDelete;