import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { ListAttendance } from "../../types/listAttendance";

const listEmergencyCare = async (): Promise<ListAttendance[]> => {
  const response = await api.get("/attendance");

  const data = response.data;

  if (data && typeof data === "object") {
    return Object.values(data) as ListAttendance[];
  }

  return [];
};

export const useListEmergencyCare = () => {
  return useQuery<ListAttendance[]>({
    queryKey: ["attendance"],
    queryFn: listEmergencyCare,
  });
};
