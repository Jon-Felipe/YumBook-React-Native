export type Recipe = {
  id: string;
  title: string;
  description?: string;
  ingredients: string[];
  steps: string[];
  imageUrl?: string;
  cookTimeMinutes?: number;
  servings?: number;
  averageRating?: number;
  author: string;
};
