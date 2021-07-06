import { getIngredients } from "../db";

export const getIngredientsRoute = {
  method: "get",
  path: "/ingredients",
  handler: async (req, res) => {
    const ingredients = await getIngredientsRoute();
    res.status(200).json(ingredients);
  },
};
