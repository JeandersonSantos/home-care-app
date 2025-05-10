import { Components, Theme } from "@mui/material/styles";

export const Typography = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
        },
      },
    },
  };
};
