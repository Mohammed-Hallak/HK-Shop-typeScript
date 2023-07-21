import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";

import { CategoryMap } from "./category.types";
import { RootState } from "../store";

let selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export let selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export let selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      let { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export let selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
