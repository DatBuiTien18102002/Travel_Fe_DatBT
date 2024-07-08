import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/user";

const userApi = {
  refreshToken: (refreshToken: string) => {
    return axiosClient.get(`${resourceName}/refresh-token`, {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    });
  },
};

export default userApi;
