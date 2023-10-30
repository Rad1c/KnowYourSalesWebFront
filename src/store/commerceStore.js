import { create } from "zustand";
import { axiosPrivate } from "../api/axios";
import extractUserDataFromToken from "../assets/helper";

const useCommerceStore = create((set) => ({
  shops: [],
  shop: {},
  addShop: async(
    name,
    cityId,
    longitude,
    latitude,
    address,
  ) => {
    const response = await axiosPrivate.post(
      "/shop",
      JSON.stringify(
        {
          name,
          cityId,
          geoPoint: {
            longitude,
            latitude,
            address,
          }
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
    );

    return response;
  },
  getShops: async() => {
    const token = localStorage.getItem("refresh");
    const { id } = extractUserDataFromToken(token);

    try {
      const response = await axiosPrivate.get(`/shops/${id}`);

      set({ shops: response.data })
    } catch (error) {
      console.error("Error fetching shops:", error);
      set({ shops: [] });
    }
  },
  getShop: async (id) => {
    try {
      const response = await axiosPrivate.get(`/shop/${id}`);

      set({ shop: response.data })
    } catch (error) {
      console.log("Error fetching shop", error);
      set({ shop: {} });
    }
  },
  updateShop: async (
    id,
    name,
    cityId,
    longitude,
    latitude,
    address
  ) => {
    try {
      await axiosPrivate.put(`/shop/${id}`,
      JSON.stringify(
        {
          id,
          name,
          cityId,
          geoPoint: {
            longitude,
            latitude,
            address,
          }
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      ));
    } catch (error) {
      console.log("Error updating shop", error);
    }
  },
  deleteShop: async (id) => {
    try {
      await axiosPrivate.delete(`/shop/${id}`);
    } catch (error) {
      console.log("Error deleting shop", error);
    }
  }
}))

export default useCommerceStore