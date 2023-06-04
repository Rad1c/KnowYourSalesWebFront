import { axiosPrivate } from "../api/axios";
import { create } from "zustand";

const useProductsStore = create((set, get) => ({
  categories: [],
  getCategories: async () => {
    const response = await axiosPrivate.get("/categories");

    set({ categories: response.data });
  },
}));

export default useProductsStore;
