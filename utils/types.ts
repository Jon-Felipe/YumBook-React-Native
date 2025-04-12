export type Recipe = {
  id: string;
  title: string;
  description?: string;
  ingredients: string[];
  steps: string[];
  imageUrl?: string;
  cookTimeMinutes?: number;
  difficulty?: string;
  servings?: number;
  averageRating?: number;
  author: string;
  categoryId: string[];
};

export type Category = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
};
