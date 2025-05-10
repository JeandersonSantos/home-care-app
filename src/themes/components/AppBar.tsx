import { Components, Theme } from "@mui/material/styles";

export const AppBar = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          color: palette.primary.contrastText,
        },
      },
    },
  };
};
