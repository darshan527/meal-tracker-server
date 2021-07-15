import { db } from ".";

export const insertIngredient = async ingredient => {
    const connection = db.getConnection()
    await connection.collection('ingredients').insertOne(ingredient)
}