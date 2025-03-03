import { StateCreator } from "zustand"
import { getCategories, searchRecipe, searchRecipies } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { FavoritesSliceType } from "./favoriteSlice"

export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>,
    selectRecipe: (searchRecipe:Drink['idDrink']) => Promise<void>,
    closeModal: () => void,
}


export const createRecipesSlice: StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories();
        if (categories && categories !== undefined) {
            set((state) => ({ ...state, categories }))
        }
    },
    searchRecipes: async (searchFilter) => {
        const searchRecipes = await searchRecipies(searchFilter)
        if (searchRecipes && searchRecipes !== undefined) {
            set((state) => ({...state, drinks: searchRecipes}) )
        }
    },
    selectRecipe: async (idDrink) => {
        const searchRecipeResult= await searchRecipe(idDrink);
        if (searchRecipeResult && searchRecipeResult !== undefined) {
            set((state) => ({...state, selectedRecipe: searchRecipeResult, modal: true}) )
        }
    },
    closeModal: () => {
        set((state) => ({...state, modal: false, selectedRecipe: {} as Recipe}))
    }
})