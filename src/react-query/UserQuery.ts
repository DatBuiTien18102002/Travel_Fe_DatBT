import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { userKeys } from "./queryKeys";
import userApi from "@/services/userApi";
import handleDecoded from "@/utils/jwtDecode";
import { signInValueForm, signUpValueForm, userType } from "@/types/types";

export const useGetAllUser = (storageData: string) => {
  return useQuery({
    queryKey: [userKeys.GET_ALL_USER, storageData],
    queryFn: () => {
      return userApi.getAllUser(storageData || "");
    },
    enabled: !!storageData,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: signUpValueForm) => userApi.createUser(data),
    onSuccess: () => {
      const { storageData } = handleDecoded();
      queryClient.invalidateQueries({
        queryKey: [userKeys.GET_ALL_USER, storageData],
      });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: userType) => {
      return userApi.updateUser(data);
    },
    onSuccess: () => {
      const { decoded, storageData } = handleDecoded();
      queryClient.invalidateQueries({
        queryKey: [userKeys.GET_ALL_USER, storageData],
      });
      queryClient.invalidateQueries({
        queryKey: [
          userKeys.GET_USER_DETAIL,
          { id: decoded?.payload?.id, token: storageData },
        ],
      });
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: signInValueForm) => userApi.loginUser(data),
  });
};

export const useGetDetailUser = (data: { id: string; token: string }) => {
  return useQuery({
    queryKey: [userKeys.GET_USER_DETAIL, data],
    queryFn: () => {
      return userApi.getDetailUser(data.id, data.token);
    },

    enabled: !!data.token || !!data.id,
  });
};
