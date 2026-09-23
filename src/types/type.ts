export type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean),
) => void;

export interface ProfileType {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  image: string;
  role: string;
  bio: string;
  total_following: number;
  total_followers: number;
  view_count: number;
  social_facebook: string;
  social_instagram: string;
  social_tiktok: string;
  created_at: string;
  updated_at: string;
}

export interface RecipeCommentType {
  id: number;
  user_id: number;
  recipe_id: number;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface RecipeDetailType {
  id: number;
  author_id: number;
  author_name: string;
  author_facebook: string;
  author_instagram: string;
  author_tiktok: string;
  title: string;
  description: string;
  nutriscore: number;
  cooktime: number;
  complexity: string;
  servings: number;
  budget: string;
  instruction: string;
  view_count: number;
  categories: string[];
  type: string;
  origin: string;
  tags: string[];
  attachment: string;
  ingredients: string[][];
  serving_per_container: number;
  serving_size: string;
  calories: number;
  total_fat: number;
  total_carbohydrate: number;
  total_sugar: number;
  cholesterol: number;
  protein: number;
  vitamin_d: number;
  sodium: number;
  calcium: number;
  potassium: number;
  iron: number;
  like_count: number;
  rating: number;
  is_liked?: boolean;
  comments: RecipeCommentType[];
  is_chef_recipe: boolean;
  created_at: string;
  updated_at: string;
}
