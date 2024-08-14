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
  loginGGUser: (token: string) => {
    return axiosClient.get(`${resourceName}/gg-login`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  loginFBUser: (token: string) => {
    return axiosClient.get(`${resourceName}/fb-login`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },

  updateUser: (data: userType) => {
    const { access_token, _id, ...detailUser } = data;

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

  getAllUsers: (access_token: string) => {
    return axiosClient.get(`${resourceName}/get-all`, {
      headers: {
        token: `Bearer ${access_token}`,
      },
    });
  },

  deleteUser: (data: { id: string; token: string }) => {
    return axiosAuthClient.delete(`${resourceName}/delete/${data.id}`, {
      headers: {
        token: `Bearer ${data.token}`,
      },
    });
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
