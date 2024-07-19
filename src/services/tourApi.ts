import { queryType, tourType } from "@/types/types";
import { axiosClient, axiosAuthClient } from "@/utils/httpRequest";

const resourceName = "/tour";

const tourApi = {
  createTour: (data: tourType) => {
    return axiosClient.post(`${resourceName}/create`, data);
  },
  getTourDetail: (id: string) => {
    return axiosClient.get(`${resourceName}/get-tour/${id}`);
  },
  getAllTour: () => {
    return axiosClient.get(`${resourceName}/get-tours`);
  },
  getTours: (params: queryType) => {
    return axiosClient.get(`${resourceName}/get-tours`, { params });
  },
  updateTour: (id: string, data: tourType) => {
    return axiosClient.put(`${resourceName}/update/${id}`, data);
  },
  deleteTour: (id: string) => {
    return axiosClient.delete(`${resourceName}/delete/${id}`);
  },
  getUnitValueByAttr: (attr: string) => {
    return axiosClient.get(`${resourceName}/unique-values/${attr}`);
  },
};

export default tourApi;
