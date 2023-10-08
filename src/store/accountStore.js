import { axiosPrivate } from "../api/axios";
import { create } from "zustand";
import extractUserDataFromToken from "../assets/helper";

const useAccountStore = create(() => ({
    getUser: async () => {
        try {
          const response = await axiosPrivate.get(`/user`)
          
          return response
        } catch (error) {
          console.error("Error fetching user name:", error);
        }
    },
    getCommerce: async () => {
        const token = localStorage.getItem("refresh")
        const { id } = extractUserDataFromToken(token)
    
        try {
          const response = await axiosPrivate.get(`/commerce/${id}`)
      
          return response
        } catch (error) {
          console.error("Error fetching commerce name:", error);
        }
    }
}))

export default useAccountStore