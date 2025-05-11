import { Components, Theme } from "@mui/material/styles";

export const Autocomplete = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.secondary.dark,
          "&.Mui-focused": {
            color: palette.secondary.dark,
          },
        },
      },
    },
  };
};
