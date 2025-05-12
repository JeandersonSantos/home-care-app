import {
  Stack,
  Typography,
  Paper,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { ListAttendance } from "../../types/listAttendance";
import { useListEmergencyCare } from "../../hooks/emergencyCare/useListEmergencyCare";

const ListSheduleMedicalCare = () => {
  const { data = [], isLoading, isFetched } = useListEmergencyCare();
  useEffect(() => {
    console.log(data);
  }, [data]);
  const theme = useTheme();
  const columns = useMemo<MRT_ColumnDef<ListAttendance>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Nome",
        size: 150,
      },
      {
        accessorKey: "phone",
        header: "Telefone",
        size: 200,
      },
      {
        accessorKey: "number",
        header: "Número",
        size: 150,
      },
      {
        accessorKey: "neighborhood",
        header: "Bairro",
        size: 150,
      },
      {
        accessorKey: "city",
        header: "Cidade",
        size: 150,
      },
    ],
    [data, isFetched, isLoading]
  );

  const table = useMaterialReactTable({
    columns,
    data,
    state: {
      isLoading,
    },
  });

  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexGrow={1}
    >
      <Paper
        sx={{
          width: "95%",
          p: 2,
          textAlign: "center",
        }}
      >
        <Stack
          bgcolor={theme.palette.secondary.main}
          textAlign="center"
          justifyContent="center"
          sx={{
            height: {
              xs: "55px",
              sm: "40px",
            },
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Typography variant="h5" fontWeight={600} sx={{ p: 3 }} color="white">
            Histórico de atendimentos
          </Typography>
        </Stack>
        {isLoading ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ height: 200 }}
          >
            <CircularProgress />
          </Stack>
        ) : (
          <MaterialReactTable table={table} />
        )}
      </Paper>
    </Stack>
  );
};

export default ListSheduleMedicalCare;
