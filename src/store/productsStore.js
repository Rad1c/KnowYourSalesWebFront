import { axiosPrivate } from "../api/axios";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  categories: [],
  cities: [],
  articles: [],
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
  getArticles: async (
    pageSize,
    page,
    name = "",
    cityName = "",
    categoryName = "",
    commerceId = ""
  ) => {
    try {
      const response = await axiosPrivate.get("/articles", {
        params: {
          pageSize,
          page,
          name,
          cityName,
          categoryName,
          commerceId,
        },
      });

      set({ articles: response.data });
    } catch (error) {
      console.error("Error fetching articles:", error);
      set({ articles: [] });
    }
  },
}));

export default useProductsStore;
