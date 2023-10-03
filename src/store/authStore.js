import { axiosPrivate } from "../api/axios";
import { create } from "zustand";
import { isExpired } from "react-jwt";
import extractUserDataFromToken from "../assets/helper";

const REGISTER_USER_URL = "/user/register";
const REGISTER_COMMERCE_URL = "/commerce/register";
const LOGIN_URL = "/login";

const useAuthStore = create((set) => ({
  cities: [],
  role: "none",
  getCitiesByCountryCode: async (code) => {
    const response = await axiosPrivate.get("/country/cities", {
      params: {
        code,
      },
    });

    set({ cities: response.data });
  },
  registerUser: async (
    firstName,
    lastName,
    sex,
    email,
    dateOfBirth,
    password,
    confirmPassword
  ) => {
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

    const userData = extractUserDataFromToken(accessToken);
    console.log("role: " + userData?.role);
    set({ role: userData.role });

    window.location.href = "/products";

    return response;
  },
  isUserLoggedIn: () => {
    const token = localStorage.getItem("refresh");
    if (!token && isExpired(token)) return "none";

    const userData = extractUserDataFromToken(token);

    if (userData) return userData?.role;

    return "none";
  },
  logout: () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    window.location.href = "/home";
  },
}));

export default useAuthStore;
