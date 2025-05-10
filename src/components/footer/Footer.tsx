import { Stack, Typography, Box, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        py: 3,
        px: 2,
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Stack sx={{ pl: "30px", pr: "30px" }}>
        <Stack
          display="flex"
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <Stack direction="row" alignItems="center">
              logo
            </Stack>
            <Typography variant="body2" sx={{ textAlign: "center", pt: "7px" }}>
              © Home Care {new Date().getFullYear()}. todos os direitos
              reservados.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
