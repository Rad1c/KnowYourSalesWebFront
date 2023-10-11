import { create } from "zustand";
import { axiosPrivate } from "../api/axios";

const ADD_SHOP = "/shop"

const useCommerceStore = create(() => ({
    addShop: async(
      shopName,
      shopCity,
      shopAddress,
      latitude,
      longitude,
    ) => {
      const response = await axiosPrivate.post(
        ADD_SHOP,
        JSON.stringify(
        {
            shopName,
            shopCity,
            shopAddress,
            latitude,
            longitude,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
    );

    return response;
    }
}))

export default useCommerceStore