import { reviewType } from "@/types/types";
import { axiosClient } from "@/utils/httpRequest";

const resourceName = "/review";

const reviewApi = {
  createReview: (data: reviewType) => {
    return axiosClient.post(`${resourceName}/create`, data);
  },
};

export default reviewApi;
