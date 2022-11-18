import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  console.log("selector 1 fired");
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("selector 2 fired");
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("Selector 3 Fired");
    return categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  selectCategoryReducer,
  (categoriesSlice) => categoriesSlice.isLoading
);
