import { tourType } from "@/types/types";
import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/tour";

const tourApi = {
  createTour: (data: tourType) => {
    return axiosClient.post(`${resourceName}/create`, data);
  },
  getAllTour: () => {
    return axiosClient.get(`${resourceName}/getTours`);
  },
};

export default tourApi;
