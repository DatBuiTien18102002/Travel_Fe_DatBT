import { signInValueForm, signUpValueForm, userType } from "@/types/types";
import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/user";

const userApi = {
  createUser: (data: signUpValueForm) => {
    return axiosClient.post(`${resourceName}/sign-up`, data);
  },

  loginUser: (data: signInValueForm) => {
    return axiosClient.post(`${resourceName}/sign-in`, data);
  },

  updateUser: (data: userType) => {
    const { access_token, _id, ...detailUser } = data;

    console.log("api id", _id);

    return axiosAuthClient.put(`${resourceName}/update/${_id}`, detailUser, {
      headers: {
        token: `Bearer ${access_token}`,
      },
    });
  },

  getDetailUser: (id: string, access_token: string) => {
    return axiosAuthClient.get(`${resourceName}/get-detail/${id}`, {
      headers: {
        token: `Bearer ${access_token}`,
      },
    });
  },

  getAllUser: (access_token: string) => {
    return axiosClient.get(`${resourceName}/get-all`);
  },

  refreshToken: (refreshToken: string) => {
    return axiosClient.get(`${resourceName}/refresh-token`, {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    });
  },
};

export default userApi;
