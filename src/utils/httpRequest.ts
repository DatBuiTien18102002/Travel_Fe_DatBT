import axios, { AxiosResponse } from "axios";
import queryString from "query-string";
import handleDecoded from "./jwtDecode";
import message from "@/utils/message";
import { userApi } from "@/services";
import { refreshTokenApi } from "@/types/types";

const handleCreateAxios = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL,
    headers: {
      "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });
};

const axiosClient = handleCreateAxios();

///////////////////////////////////////

const axiosAuthClient = handleCreateAxios();

axiosAuthClient.interceptors.request.use(
  async function (config) {
    const storageRefreshToken = localStorage.getItem("refresh_token");
    if (storageRefreshToken) {
      const refreshToken = JSON.parse(storageRefreshToken || "");

      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp && decoded.exp < currentTime.getTime() / 1000) {
        try {
          const response: AxiosResponse<refreshTokenApi> =
            await userApi.refreshToken(refreshToken);

          if (response?.data.err === "jwt expired") {
            throw new Error("Refresh Token hết hạn");
          }

          localStorage.setItem(
            "access_token",
            JSON.stringify(response?.data?.newAccess_Token)
          );

          config.headers["token"] = `Bearer ${response?.data?.newAccess_Token}`;
        } catch (error) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          message("error", "Phiên đăng nhập hết hạn");
          message("info", "Bạn cần đăng nhập lại");
          setTimeout(() => (window.location.href = "/"), 3000);
        }
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const axiosList = [axiosClient, axiosAuthClient];

axiosList.forEach((axiosItem) => {
  axiosItem.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },

    (error) => {
      throw error;
    }
  );
});

export { axiosClient, axiosAuthClient };
