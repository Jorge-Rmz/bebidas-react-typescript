import { StateCreator } from "zustand"

type Category = {id: string}
export type RecipesSliceType = {
    categories: Category[],
}

export const createRecipesSlice:StateCreator<RecipesSliceType> = () => ({
    categories: [],
})