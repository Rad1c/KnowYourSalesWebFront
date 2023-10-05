import { axiosPrivate } from "../api/axios";
import { create } from "zustand";

const useHomeStore = create((set) => ({
  impressions: [],
  getImpressions: async () => {
    const response = await axiosPrivate.get("/user/impressions");

    set({ impressions: response.data });
  },
}));

export default useHomeStore;
