import { axiosPrivate } from "../api/axios";
import { create } from "zustand";

const useProductsStore = create((set, get) => ({
  categories: [],
  cities: [],
  getCategories: async () => {
    const response = await axiosPrivate.get("/categories");

    set({ categories: response.data });
  },
  getCitiesByCountryCode: async (code) => {
    const response = await axiosPrivate.get("/country/cities", {
      params: {
        code,
      },
    });

    set({ cities: response.data });
  },
}));

export default useProductsStore;
