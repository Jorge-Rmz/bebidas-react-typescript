import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksShearSchema, RecipeAPIResponseSchema } from "../schemas/recipes-schema" // Adjust the import path as necessary
import { Drink, SearchFilter } from "../types";

export async function getCategories(){
    const categoryUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(categoryUrl);
    const result = CategoriesAPIResponseSchema.safeParse(data);
    if(result.success){
        return result.data;
    } 
}


export async function searchRecipies( filter: SearchFilter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.ingredient}`
    const {data} = await axios(url);
    const result = DrinksShearSchema.safeParse(data);
    if(result.success){
        return result.data;
    } 
}
export async function searchRecipe( idDrink: Drink['idDrink']){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    const {data} = await axios(url);
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
    if(result.success){
        return result.data;
    } 
}
