import { bookingType } from "@/types/types";
import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/booking";

const bookingApi = {
  createBooking: (data: bookingType, token: string) => {
    return axiosAuthClient.post(`${resourceName}/create`, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  getMyBookings: (data: { token: string; userId: string }) => {
    const { token, userId } = data;
    return axiosAuthClient.get(`${resourceName}/bookings-user/${userId}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  getAllBookings: (token: string) => {
    return axiosAuthClient.get(`${resourceName}/bookings-all`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  getBookingDetail: (bookingId: string) => {
    return axiosAuthClient.get(`${resourceName}/booking-detail/${bookingId}`);
  },
  updateBooking: (id: string, data: bookingType, token: string) => {
    return axiosClient.put(`${resourceName}/update/${id}`, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  deleteBooking: (id: string) => {
    return axiosClient.delete(`${resourceName}/delete/${id}`);
  },
};

export default bookingApi;
