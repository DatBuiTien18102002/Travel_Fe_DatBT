import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { tourKeys } from "./queryKeys";
import { tourApi } from "@/services";
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

export const useGetDetailTour = (id: string) => {
  return useQuery({
    queryKey: [tourKeys.GET_TOUR_DETAIL, id],
    queryFn: () => tourApi.getTourDetail(id),
    enabled: !!id,
  });
};

export const useGetAllTour = () => {
  return useQuery({
    queryKey: [tourKeys.GET_ALL_TOUR],
    queryFn: () => tourApi.getAllTour(),
  });
};
