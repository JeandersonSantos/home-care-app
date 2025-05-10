import { Components, Theme } from "@mui/material/styles";

export const Button = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: palette.primary.contrastText,
          backgroundColor: palette.primary.dark,
          "&:hover": {
            backgroundColor: palette.primary.light,
          },
        },
      },
    },
  };
};
