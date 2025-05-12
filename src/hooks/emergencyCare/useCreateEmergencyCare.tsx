import { useMutation } from "@tanstack/react-query";
import api from "../../utils/api";
import { FormValues } from "../../types/formValues";

const createEmergencyCare = async (payload: FormValues): Promise<any> => {
  try {
    const response = await api.post(`/attendance`, payload);
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
export const useCreateEmergencyCare = () => {
  return useMutation<any, Error, FormValues>({
    mutationFn: (payload: FormValues) => createEmergencyCare(payload),
  });
};
