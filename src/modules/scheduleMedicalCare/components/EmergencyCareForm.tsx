import React, { useRef, useState, forwardRef } from "react";
import { Grid, useTheme, TextField, Divider, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormValues } from "../../../types/formValues";
import { useCreateEmergencyCare } from "../../../hooks/emergencyCare/useCreateEmergencyCare";
import { enqueueSnackbar } from "notistack";
import ModalShowInfo from "./ModalShowInfo";
import { MaskedInput } from "../../../components/phoneMask/index";
import DeleteIcon from "@mui/icons-material/Delete";

const EmergencyCareForm = () => {
  const theme = useTheme();
  const formRefs = useRef<(HTMLInputElement | HTMLButtonElement | null)[]>([]);
  const createEmergencyCare = useCreateEmergencyCare();
  const initialInfo = {
    protocol: "",
    date: "",
    doctor: "",
    image: "",
  };
  const [openModalShowInfo, setOpenModalShowInfo] = useState({
    open: false,
    info: initialInfo,
  });
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextField = formRefs.current[index + 1];
      if (nextField) {
        nextField.focus();
      } else {
        const currentField = formRefs.current[index];
        if (currentField instanceof HTMLButtonElement) {
          currentField.click();
        }
      }
    }
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    phone: Yup.string()
      .required("Telefone é obrigatório")
      .matches(
        /^(?:\(\d{2}\)\s?\d{5}-\d{4})$/,
        "Telefone deve estar no formato (XX) XXXXX-XXXX"
      ),
    street: Yup.string().required("Rua é obrigatório"),
    number: Yup.string().required("Número é obrigatório"),
    neighborhood: Yup.string().required("Bairro é obrigatório"),
    city: Yup.string().required("Cidade é obrigatório"),
  });
  const save = async (values: FormValues) => {
    try {
      const payload = {
        name: values.name,
        phone: values.phone,
        street: values.street,
        number: values.number,
        neighborhood: values.neighborhood,
        city: values.city,
      };
      const response = await createEmergencyCare.mutateAsync(payload);

      enqueueSnackbar("Registro Emergencial realizado com sucesso!", {
        variant: "success",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });

      setOpenModalShowInfo({
        open: true,
        info: {
          protocol: response.careProtocol,
          date: response.infoRequestCare.createdat,
          doctor: response.doctor,
          image: response?.image || "",
        },
      });
      formik.resetForm();
    } catch (error) {
      enqueueSnackbar("Não foi possivel realizar o registro!", {
        variant: "error",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
    },
    validationSchema,
    onSubmit: (values) => {
      save(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              id="name"
              name="name"
              label="Nome"
              variant="outlined"
              required
              fullWidth
              inputRef={(el) => (formRefs.current[0] = el)}
              onKeyDown={(event) => handleKeyDown(event, 0)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="phone"
              required
              name="phone"
              label="Telefone"
              placeholder="(99) 99999-9999"
              variant="outlined"
              fullWidth
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown(event, 1)
              }
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              inputRef={(el) => (formRefs.current[1] = el)}
              InputProps={{
                inputComponent: MaskedInput as any,
              }}
            />
          </Grid>
          <Divider sx={{ width: "100%" }} />
          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              id="street"
              name="street"
              required
              label="Rua"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[2] = el)}
              onKeyDown={(event) => handleKeyDown(event, 2)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
              error={formik.touched.street && Boolean(formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="number"
              name="number"
              required
              label="Número"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[3] = el)}
              onKeyDown={(event) => handleKeyDown(event, 3)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="neighborhood"
              name="neighborhood"
              required
              label="Bairro"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[4] = el)}
              onKeyDown={(event) => handleKeyDown(event, 4)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.neighborhood}
              error={
                formik.touched.neighborhood &&
                Boolean(formik.errors.neighborhood)
              }
              helperText={
                formik.touched.neighborhood && formik.errors.neighborhood
              }
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              id="city"
              name="city"
              required
              label="Cidade"
              variant="outlined"
              fullWidth
              inputRef={(el) => (formRefs.current[5] = el)}
              onKeyDown={(event) => handleKeyDown(event, 5)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}></Grid>

          <Divider sx={{ width: "100%" }} />
          <Grid
            size={{ xs: 12, md: 12 }}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 8 }}>
              <Button
                type="submit"
                size="large"
                sx={{ maxWidth: "300px" }}
                loading={createEmergencyCare.isPending}
                variant="outlined"
                loadingPosition="start"
                endIcon={
                  <SendIcon
                    sx={{
                      color: `${theme.palette.background.default} !important`,
                    }}
                  />
                }
                ref={(el) =>
                  (formRefs.current[6] = el as unknown as HTMLButtonElement)
                }
                onKeyDown={(event) => handleKeyDown(event, 6)}
              >
                Solicitar Atendimneto
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Button
                size="large"
                variant="outlined"
                loadingPosition="start"
                sx={{
                  float: { md: "right" },
                }}
                endIcon={
                  <DeleteIcon
                    sx={{
                      color: `${theme.palette.background.default} !important`,
                    }}
                  />
                }
                onClick={() => formik.resetForm()}
              >
                Limpar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {openModalShowInfo.open && (
        <ModalShowInfo
          open={openModalShowInfo.open}
          handleClose={() =>
            setOpenModalShowInfo({ open: false, info: initialInfo })
          }
          info={openModalShowInfo.info}
        />
      )}
    </>
  );
};
export default EmergencyCareForm;
