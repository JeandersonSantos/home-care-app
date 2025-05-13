import { useMutation } from "@tanstack/react-query";
import api from "../../utils/api";
import { FormValues } from "../../types/formValues";

const createEmergencyCare = async (payload: FormValues): Promise<any> => {
  const response = await api.post(`/attendance`, payload);
  return response.data;
};

export const useCreateEmergencyCare = () => {
  return useMutation<any, Error, FormValues>({
    mutationFn: createEmergencyCare,
    retry: 2,
    retryDelay: 500,
  });
};
