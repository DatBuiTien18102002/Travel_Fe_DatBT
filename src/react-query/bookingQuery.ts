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
        queryKey: [bookingKeys.GET_ALL_BOOKING, storageData],
      });
    },
  });
};
