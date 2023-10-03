import { axiosPrivate } from "../api/axios";
import { create } from "zustand";
import extractUserDataFromToken from "../assets/helper";

const useHomeStore = create((set) => ({
  impressions: [],
  getImpressions: async () => {
    const response = await axiosPrivate.get("/user/impressions");

    set({ impressions: response.data });
  },
  getUser: async () => {
    const token = localStorage.getItem("refresh")
    const { id } = extractUserDataFromToken(token)

    try {
      const response = axiosPrivate.get(`/user/${id}`)
  
      return response
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  },
  getCommerce: async () => {
    const token = localStorage.getItem("refresh")
    const { id } = extractUserDataFromToken(token)

    try {
      const response = axiosPrivate.get(`/commerce/${id}`)
  
      return response
    } catch (error) {
      console.error("Error fetching user name:", error);
    }
  }
}));

export default useHomeStore;
