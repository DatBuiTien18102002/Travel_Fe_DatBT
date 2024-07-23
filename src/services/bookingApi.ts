import { bookingType } from "@/types/types";
import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/booking";

const bookingApi = {
  createBooking: (data: bookingType, token: string) => {
    return axiosAuthClient.post(`${resourceName}/create/${data.userId}`, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default bookingApi;
