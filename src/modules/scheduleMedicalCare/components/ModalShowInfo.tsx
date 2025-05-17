import React from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Divider,
  Tooltip,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import dayjs from "dayjs";

type InfoType = {
  date: string;
  protocol: string;
  doctor: string;
  image?: string;
};

type ModalShowInfoProps = {
  open: boolean;
  handleClose: () => void;
  info: InfoType;
};
const ModalShowInfo = ({ open, handleClose, info }: ModalShowInfoProps) => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle fontWeight={600}>
            Informações do registro emergencial
          </DialogTitle>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CancelIcon />
          </IconButton>
          <DialogContent
            style={{ display: "flex", flexDirection: "column" }}
            dividers
          >
            <Grid container style={{ minWidth: "300px" }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack justifyContent={"center"} height={"100%"}>
                  <Box
                    display={"flex"}
                    gap="5px"
                    flexDirection="row"
                    alignItems={"center"}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      Protocolo:
                    </Typography>
                    <Typography variant="subtitle2">{info.protocol}</Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap="5px"
                    flexDirection="row"
                    alignItems={"center"}
                  >
                    {" "}
                    <Typography variant="subtitle1" fontWeight={600}>
                      Data:
                    </Typography>
                    <Typography variant="subtitle2">
                      {dayjs(info.date).format("DD/MM/YYYY")}
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    gap="5px"
                    flexDirection="row"
                    alignItems={"center"}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      Doutor responsável:
                    </Typography>
                    <Typography variant="subtitle2">{info.doctor}</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  mb={"10px"}
                >
                  <Tooltip title={`Dr: ${info.doctor}`}>
                    <img
                      src="/static/images/doctor.jpg"
                      alt="doutor"
                      height="140px"
                      style={{ cursor: "pointer" }}
                    />
                  </Tooltip>
                </Stack>
              </Grid>
              <Divider sx={{ width: "100%", mt: "5px", mb: "5px" }} />
              <Grid size={{ xs: 12 }}>
                <Typography variant="body1" fontWeight={600}>
                  Observações:
                </Typography>
                <Typography variant="body2">
                  O número do protocolo e a data do atendimento já foram
                  enviados para o WhatsApp do cliente.
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  );
};
export default ModalShowInfo;
