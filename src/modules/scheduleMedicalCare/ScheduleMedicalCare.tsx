import { Stack, Typography, Paper, useTheme } from "@mui/material";
import EmergencyCareForm from "./components/EmergencyCareForm";

const ScheduleMedicalCare = () => {
  const theme = useTheme();
  
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "80%",
        }}
      >
        <Stack mb="15px">
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
            <Typography
              sx={{
                color: theme.palette.background.default,
                fontWeight: "bold",
                fontSize: {
                  xs: "1rem",
                  sm: "1.25rem",
                },
              }}
            >
              ATENDIMENTO DE URGÊNCIA HOME CARE
            </Typography>
          </Stack>
          <Stack
            bgcolor={theme.palette.secondary.light}
            height="40px"
            justifyContent="center"
            pl="10px"
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: theme.palette.background.default,
              }}
            >
              REGISTRO DE SOLICITAÇÃO
            </Typography>
          </Stack>
        </Stack>
        <EmergencyCareForm />
      </Paper>
    </Stack>
  );
};
export default ScheduleMedicalCare;
