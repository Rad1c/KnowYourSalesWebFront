import { axiosPrivate } from "../api/axios";
import { create } from "zustand";
import extractUserDataFromToken from "../assets/helper";

const VERIFY_ACCOUNT_URL = "/verify-account";

const useAccountStore = create((set) => ({
  status: 0,
  getUser: async () => {
    try {
      const response = await axiosPrivate.get(`/user`);

      return response;
    } catch (error) {
      console.error("Error fetching user name: ", error);
    }
  },
  updateUser: async (
    id,
    firstName,
    lastName,
    sex,
    dateOfBirth
  ) => {
    try {
      await axiosPrivate.put(`/user`,
      JSON.stringify(
        {
          id,
          firstName,
          lastName,
          sex,
          dateOfBirth
        },
        {
          headers: {"Content-Type": "application/json"},
        }
      ));
    } catch (error) {
      console.log("Error updating user: ", error);
    }
  },
  getCommerce: async () => {
    const token = localStorage.getItem("refresh");
    const { id } = extractUserDataFromToken(token);

    try {
      const response = await axiosPrivate.get(`/commerce/${id}`);

      return response;
    } catch (error) {
      console.error("Error fetching commerce name: ", error);
    }
  },
  verifyAccount: async (code) => {
    try {
      const response = await axiosPrivate.post(
        VERIFY_ACCOUNT_URL,
        JSON.stringify(
          {
            code,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
      );
      if (response?.status == 200) set({ status: 200 });
    } catch (error) {
      set({ status: 403 });
    }
  },
}));

export default useAccountStore;
