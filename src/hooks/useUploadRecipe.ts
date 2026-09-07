import { useState, ChangeEvent } from "react";
import supabase from "../app/supabase";
import useFetchProfile from "../hooks/useFetchProfile";
import axios from "axios";

interface Profile {
  image: string;
}

const useUploadRecipeImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { profile, refetchProfile } = useFetchProfile();

  const fetchUserImage = async (updatedImage: string) => {
    const authToken = localStorage.getItem("access_token");
    if (authToken) {
      try {
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
        const response = await axios.post(
          "http://127.0.0.1:5000/recipes/create",
          { attachment: updatedImage },
          { headers }
        );
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUploadImage = async () => {
    if (file && profile) {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${file.name}`;

      const pathInStorage = `images/recipes/${profile.username}/${fileName}`;
      try {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("recipe_image")
          .upload(pathInStorage, file);

        if (uploadError) {
          console.error("Error uploading file:", uploadError.message);
          return;
        }
        const imageUrl = uploadData
          ? `https://lwgscyxqeipmjzaxphkv.supabase.co/storage/v1/object/public/recipe_image/${uploadData?.path}`
          : null;
        setImageUrl(imageUrl);
        // const imageUrl =
        //   `https://lwgscyxqeipmjzaxphkv.supabase.co/storage/v1/object/public/recipe_image/${uploadData?.path} ` ??
        //   "";
        if (!imageUrl) {
          return console.error("not the right link");
        }

        await fetchUserImage(imageUrl);
        console.log(imageUrl);
        console.log("File uploaded successfully:", uploadData);
        refetchProfile();
      } catch (error) {
        console.error("Error uploading or updating profile:", error);
      }
    }
  };

  return {
    file,
    imageUrl,
    handleFileChange,
    handleUploadImage,
  };
};

export default useUploadRecipeImage;
