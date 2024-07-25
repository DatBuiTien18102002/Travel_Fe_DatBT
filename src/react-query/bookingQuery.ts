import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { bookingKeys } from "./queryKeys";
import { bookingApi } from "@/services";
import handleDecoded from "@/utils/jwtDecode";
import { bookingType, queryType } from "@/types/types";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: bookingType) => {
      const { storageData } = handleDecoded();

      return bookingApi.createBooking(data, storageData || "");
    },
    onSuccess: () => {
      const { storageData } = handleDecoded();
      queryClient.invalidateQueries({
        queryKey: [bookingKeys.GET_ALL_BOOKINGS, storageData],
      });
    },
  });
};

export const useGetMyBookings = (userId: string) => {
  const { storageData } = handleDecoded();
  const data = { token: storageData || "", userId: userId };
  return useQuery({
    queryKey: [bookingKeys.GET_MY_BOOKINGS, data],
    queryFn: () => bookingApi.getMyBookings(data),
    enabled: !!userId,
  });
};
export const useGetAllBookings = () => {
  const { storageData } = handleDecoded();

  return useQuery({
    queryKey: [bookingKeys.GET_ALL_BOOKINGS, storageData],
    queryFn: () => bookingApi.getAllBookings(storageData || ""),
    enabled: !!storageData,
  });
};

export const useGetBookingDetail = (bookingId: string) => {
  const { storageData } = handleDecoded();
  const data = { token: storageData || "", bookingId: bookingId };
  return useQuery({
    queryKey: [bookingKeys.GET_BOOKING_DETAIL, data],
    queryFn: () => bookingApi.getBookingDetail(data),
    enabled: !!bookingId,
  });
};

export const useUpdateBooking = () => {
  const queryClient = useQueryClient();
  const { storageData } = handleDecoded();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: bookingType }) => {
      return bookingApi.updateBooking(id, data, storageData || "");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [bookingKeys.GET_ALL_BOOKINGS],
      });
    },
  });
};
