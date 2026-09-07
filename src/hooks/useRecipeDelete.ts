import axios from "axios";
import Swal from "sweetalert2";
const useRecipeDelete = () => {
  const handleDeleteRecipe = async () => {
    const authToken = localStorage.getItem("access_token");
    if (authToken) {
      try {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.delete(
          "http://127.0.0.1:5000/recipes/delete",
          {
            headers,
          }
        );
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
    }
  };

  return { handleDeleteRecipe };
};
export default useRecipeDelete;
