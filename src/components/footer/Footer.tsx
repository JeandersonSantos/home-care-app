import { Stack, Typography, Box, Paper } from "@mui/material";

const Footer = () => {

  return (
    <Paper
      id="footer"
      component="footer"
      elevation={0}
      sx={{
        py: 3,
        px: 2,
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: 0
      }}
    >
      <Stack sx={{ pl: "30px", pr: "30px" }}>
        <Stack
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              width: "100%",
            }}
        >
          <Typography variant="body2" sx={{ textAlign: "center", pt: "7px" }}>
            © Home Care {new Date().getFullYear()}. todos os direitos
            reservados.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Footer;
