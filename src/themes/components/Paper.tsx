import { Components, Theme } from "@mui/material/styles";

export const Paper = (
  palette: Theme["palette"]
): Partial<Components<Theme>> => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
        },
      },
    },
  };
};
