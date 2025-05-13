import {
  Stack,
  Typography,
  Paper,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { ListAttendance } from "../../types/listAttendance";
import { useListEmergencyCare } from "../../hooks/emergencyCare/useListEmergencyCare";

const ListSheduleMedicalCare = () => {
  const { data = [], isLoading, isFetched } = useListEmergencyCare();

  const theme = useTheme();
  const columns = useMemo<MRT_ColumnDef<ListAttendance>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Nome",
        size: 150,
        minSize: 100,
        maxSize: 200,
      },
      {
        accessorKey: "phone",
        header: "Telefone",
        size: 200,
        minSize: 100,
        maxSize: 200,
      },
      {
        accessorKey: "number",
        header: "Número",
        size: 150,
        minSize: 100,
        maxSize: 200,
      },
      {
        accessorKey: "neighborhood",
        header: "Bairro",
        size: 150,
        minSize: 100,
        maxSize: 200,
      },
      {
        accessorKey: "city",
        header: "Cidade",
        size: 150,
        minSize: 100,
        maxSize: 200,
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
    muiTableContainerProps: {
      sx: {
        maxWidth: "100%",
        overflowX: "auto",
      },
    },
    enableColumnResizing: true,
    layoutMode: "grid",
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
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: 1,
            overflowX: "auto",
          },
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
