import { axiosPrivate } from "../api/axios";
import { create } from "zustand";
import { isExpired } from "react-jwt";

const REGISTER_USER_URL = "/user/register";
const REGISTER_COMMERCE_URL = "/commerce/register";
const LOGIN_URL = "/login";

const useAuthStore = create((set, get) => ({
  cities: [],
  isUserLoggedIn: false,
  getCitiesByCountryCode: async (code) => {
    const response = await axiosPrivate.get("/country/cities", {
      params: {
        code,
      },
    });

    set({ cities: response.data });
  },
  registerUser: async (firstName, lastName, sex, email, dateOfBirth, password, confirmPassword) => {
    const response = await axiosPrivate.post(
      REGISTER_USER_URL,
      JSON.stringify(
        {
          firstName,
          lastName,
          sex,
          email,
          dateOfBirth,
          password,
          confirmPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
    );

    return response;
  },
  registerCommerce: async (name, cityId, email, password, confirmPassword) => {
    const response = await axiosPrivate.post(
      REGISTER_COMMERCE_URL,
      JSON.stringify(
        {
          name,
          cityId,
          email,
          password,
          confirmPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
    );

    return response;
  },
  login: async (email, password) => {
    const response = await axiosPrivate.post(
      LOGIN_URL,
      JSON.stringify(
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
    );

    const accessToken = response?.data?.accessToken;
    const refreshToken = response?.data?.refreshToken;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);

    set({ isUserLoggedIn: true });

    return response;
  },
  isTokenExpired: () => {
    const token = localStorage.getItem("refresh");

    return isExpired(token);
  },
}));

export default useAuthStore;
