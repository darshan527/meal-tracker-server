
import { db } from ".";

export const deleteIngredient = async (ingredientName) => {
    const connection = db.getConnection();
    await connection.collection('ingredients').deleteOne({ 'name': ingredientName })
}