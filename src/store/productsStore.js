import { axiosPrivate } from "../api/axios";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  searchIsEnabled: true,
  categories: [],
  cities: [],
  articles: [],
  article: null,
  pageSize: 24,
  moreArticlesFromCommerce: [],
  moreArticlesFromCategory: [],
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
  getArticles: async (pageSize, page, name = "", cityId = "", categoryId = "", commerceId = "") => {
    try {
      const response = await axiosPrivate.get("/articles", {
        params: {
          pageSize,
          page,
          name,
          cityId,
          categoryId,
          commerceId,
        },
      });

      set({ articles: response.data });
    } catch (error) {
      console.error("Error fetching articles:", error);
      set({ articles: [] });
    }
  },
  getArticle: async (id) => {
    try {
      const response = await axiosPrivate.get(`/article/${id}`, {});

      set({ article: response.data });
    } catch (error) {
      console.error("Error fetching article:", error);
      set({ article: null });
    }
  },
  getMoreArticlesFromCommerce: async (commerceId) => {
    try {
      const response = await axiosPrivate.get("/articles", {
        params: {
          pageSize: 4,
          page: 1,
          name: "",
          cityId: null,
          categoryId: null,
          commerceId,
        },
      });

      set({ moreArticlesFromCommerce: response?.data });
    } catch (error) {
      console.error("Error fetching articles:", error);
      set({ moreArticlesFromCommerce: [] });
    }
  },
  getMoreArticlesFromCategory: async (categoryId) => {
    try {
      const response = await axiosPrivate.get("/articles", {
        params: {
          pageSize: 4,
          page: 1,
          name: "",
          cityId: null,
          categoryId,
          commerceId: null,
        },
      });

      set({ moreArticlesFromCategory: response?.data });
    } catch (error) {
      console.error("Error fetching articles:", error);
      set({ moreArticlesFromCategory: [] });
    }
  },
  searchArticles: async (name) => {
    try {
      const response = await axiosPrivate.get("/articles", {
        params: {
          pageSize: 4,
          page: 1,
          name,
          cityId: null,
          categoryId: null,
          commerceId: null,
        },
      });

      set({ articles: response?.data });
    } catch (error) {
      console.error("Error fetching articles:", error);
      set({ articles: [] });
    }
  },
  setSearchIsEnabled: (isEnabled) => {
    set({ searchIsEnabled: isEnabled });
  },
  setPageSize: (pageSize) => {
    set({ pageSize });
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
      JSON.stringify(
        {
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
        }
      )
    );

    return response;
  },
}));

export default useProductsStore;
