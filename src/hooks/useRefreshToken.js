import axios from "../api/axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const prevRefresh = localStorage.getItem("refresh");

    const response = await axios.get("/refresh-token", {
      params: { refreshToken: prevRefresh },
    });

    return response;
  };

  return refresh;
};

export default useRefreshToken;
