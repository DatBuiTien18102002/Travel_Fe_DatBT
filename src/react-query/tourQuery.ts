import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { tourKeys } from "./queryKeys";
import tourApi from "@/services/tourApi";
import handleDecoded from "@/utils/jwtDecode";
import { tourType } from "@/types/types";

export const useCreateTour = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: tourType) => tourApi.createTour(data),
    onSuccess: () => {
      const { storageData } = handleDecoded();
      queryClient.invalidateQueries({
        queryKey: [tourKeys.GET_ALL_TOUR, storageData],
      });
    },
  });
};
