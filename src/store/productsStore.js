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
  addArticle: async (
    commerceId,
    categoryIds,
    shopIds,
    currencyName,
    name,
    description,
    oldPrice,
    newPrice,
    validDate,
    images
  ) => {
    const response = await axiosPrivate.post(
      "/article",
      JSON.stringify({
        commerceId,
        categoryIds,
        shopIds,
        currencyName,
        name,
        description,
        oldPrice,
        newPrice,
        validDate,
        images,
      },
      {
        headers: { "Content-Type": "application/json" },
      })
    )

    return response;
  }
}));

export default useProductsStore;
