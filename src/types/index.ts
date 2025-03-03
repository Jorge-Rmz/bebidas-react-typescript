import { z } from "zod"
import { CategoriesAPIResponseSchema, DrinkShearSchema, DrinksShearSchema, RecipeAPIResponseSchema, SearchFilterSchema } from "../schemas/recipes-schema" // Adjust the import path as necessary


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drink = z.infer<typeof DrinkShearSchema>;
export type Drinks = z.infer<typeof DrinksShearSchema>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;