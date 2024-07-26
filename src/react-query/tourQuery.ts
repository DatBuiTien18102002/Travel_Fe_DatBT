import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { tourKeys } from "./queryKeys";
import { tourApi } from "@/services";
import handleDecoded from "@/utils/jwtDecode";
import { queryType, tourType } from "@/types/types";

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

export const useGetTours = (params: queryType) => {
  return useQuery({
    queryKey: [tourKeys.GET_TOURS],
    queryFn: () => tourApi.getTours(params),
  });
};

export const useGetToursByName = (params: queryType) => {
  return useQuery({
    queryKey: [tourKeys.GET_TOURS_BY_NAME],
    queryFn: () => tourApi.getTours(params),
    enabled: !!params.name,
  });
};

export const useUpdateTour = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: tourType }) => {
      return tourApi.updateTour(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [tourKeys.GET_ALL_TOUR],
      });
    },
  });
};

export const useDeleteTour = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return tourApi.deleteTour(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [tourKeys.GET_ALL_TOUR],
      });
      queryClient.invalidateQueries({
        queryKey: [tourKeys.GET_ALL_TIME_TRAVEL],
      });
    },
  });
};

export const useGetUniqueValuesByAttr = (attr: string) => {
  return useQuery({
    queryKey: [attr],
    queryFn: () => tourApi.getUnitValueByAttr(attr),
  });
};
