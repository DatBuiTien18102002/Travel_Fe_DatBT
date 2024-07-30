import { useMutation } from "@tanstack/react-query";
import { reviewApi } from "@/services";
import { reviewType } from "@/types/types";

export const useCreateReview = () => {
  return useMutation({
    mutationFn: (data: reviewType) => {
      return reviewApi.createReview(data);
    },
  });
};
