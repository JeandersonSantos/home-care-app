import { Components, Theme } from "@mui/material/styles";

export const TextField = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: palette.secondary.dark,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.secondary.dark,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.secondary.dark, 
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: palette.secondary.dark,
          },
        },
      },
    },
  };
};
