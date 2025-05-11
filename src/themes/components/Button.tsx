import { Components, Theme } from "@mui/material/styles";

export const Button = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: palette.background.default,
          backgroundColor: palette.secondary.main,
          "&:hover": {
            backgroundColor: "rgba(15, 168, 8, 0.8)",
            border: `1px solid rgba(15, 168, 8, 0.8)`, 
          },
        },
      },
    },
  };
};
