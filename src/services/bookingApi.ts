import { bookingType } from "@/types/types";
import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/booking";

const bookingApi = {
  createBooking: (data: bookingType, token: string) => {
    console.log(data);
    return axiosAuthClient.post(
      `${resourceName}/create/${data.userInfo}`,
      data,
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );
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
  getBookingDetail: (data: { token: string; bookingId: string }) => {
    const { token, bookingId } = data;
    return axiosAuthClient.get(`${resourceName}/booking-detail/${bookingId}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  updateBooking: (id: string, data: bookingType, token: string) => {
    return axiosClient.put(`${resourceName}/update/${id}`, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
  deleteBooking: (token: string, id: string) => {
    return axiosClient.delete(`${resourceName}/delete/${id}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
  },
};

export default bookingApi;
