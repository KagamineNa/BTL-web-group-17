import { AJAX } from './helper';
import { API_URL } from './config';
export const state = {
  recipe: {},
};

const createRecipe = function (data) {
  const { recipe } = data.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
  };
};
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}/${id}`);
    state.recipe = createRecipe(data);
  } catch (error) {
    throw error;
  }
};
