import React, { useRef } from "react";
import {
  Stack,
  Typography,
  Paper,
  Grid,
  useTheme,
  TextField,
  Divider,
  Button,
  Autocomplete,
  TextFieldProps,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import states from "../../utils/states";
import InputMask from "react-input-mask"; // Importa o InputMask

const ScheduleMedicalCare = () => {
  const theme = useTheme();
  const formRefs = useRef<(HTMLInputElement | HTMLButtonElement | null)[]>([]);
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextField = formRefs.current[index + 1];
      if (nextField) {
        nextField.focus();
      }
    }
  };

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
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              id="name"
              label="Nome"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[0] = el)}
              onKeyDown={(event) => handleKeyDown(event, 0)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <InputMask
              mask="(99) 99999-9999" // Define a máscara para telefone
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown(event, 1)
              }
            >
              {(inputProps: TextFieldProps) => (
                <TextField
                  {...inputProps}
                  id="phone"
                  label="Telefone"
                  placeholder="(99) 99999-9999"
                  variant="outlined"
                  fullWidth
                  inputRef={(el) => (formRefs.current[1] = el)}
                />
              )}
            </InputMask>
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              id="street"
              label="Rua"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[2] = el)}
              onKeyDown={(event) => handleKeyDown(event, 2)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="number"
              type="number"
              label="Número"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[3] = el)}
              onKeyDown={(event) => handleKeyDown(event, 3)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="neighborhood"
              label="Bairro"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[4] = el)}
              onKeyDown={(event) => handleKeyDown(event, 4)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="city"
              label="Cidade"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[5] = el)}
              onKeyDown={(event) => handleKeyDown(event, 5)}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Autocomplete
              disablePortal
              fullWidth
              options={states}
              getOptionLabel={(option) => {
                return `${option.state} - (${option.uf})`;
              }}
              onChange={(event, value) => {}}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Estado"
                  inputRef={(el) => (formRefs.current[6] = el)}
                  onKeyDown={(event) => handleKeyDown(event, 6)}
                />
              )}
            />
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid size={{ xs: 12 }}>
            <Button
              size="large"
              sx={{ width: "270px" }}
              loading={false}
              variant="outlined"
              loadingPosition="start"
              endIcon={
                <SendIcon
                  sx={{
                    color: `${theme.palette.background.default} !important`,
                  }}
                />
              }
              ref={(el) => (formRefs.current[7] = el as HTMLButtonElement)}
              onKeyDown={(event) => handleKeyDown(event, 7)}
            >
              Solicitar Atendimneto
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};
export default ScheduleMedicalCare;
