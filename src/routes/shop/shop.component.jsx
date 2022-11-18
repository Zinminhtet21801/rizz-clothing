import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  fetchCategoriesStart,
  // fetchCategoriesStartAsync,
  // setCategories,
} from "../../store/categories/categories.action";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../categories/categories.component";

const Shop = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments();
  //     dispatch(setCategories(categoriesArray));
  //   };
  //   getCategoriesMap();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
