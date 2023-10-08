import axios from "axios";
import useRefreshToken from "../hooks/useRefreshToken";

const baseURL = import.meta.env.VITE_BASE_URL_STATE;
const refresh = useRefreshToken();

export default axios.create({ baseURL });

const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");

    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (err) => {
    const prevReq = err?.config;
    if (err?.response?.status === 401 && !prevReq?.sent) {
      prevReq.sent = true;

      const { data: newAccessToken } = await refresh();

      prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`;

      return axiosPrivate(prevReq);
    }

    throw err;
  }
);

export { axiosPrivate };
