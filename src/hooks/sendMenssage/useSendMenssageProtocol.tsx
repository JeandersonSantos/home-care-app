import { useMutation } from "@tanstack/react-query";
import api from "../../utils/api";
import { SendMenssageProtocol } from "../../types/sendMenssageProtocol";

const sendMenssageProtocol = async (
  payload: SendMenssageProtocol
): Promise<any> => {
  const response = await api.post(`/send-message-protocol`, payload);
  return response.data;
};

export const useSendMenssageProtocol = () => {
  return useMutation<any, Error, SendMenssageProtocol>({
    mutationFn: sendMenssageProtocol,
    retry: 2,
    retryDelay: 500,
  });
};
