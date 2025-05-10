import { Components, Theme } from "@mui/material/styles";

export const SvgIcon = (palette: Theme["palette"]): Components<Theme> => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.tree.main,
        },
      },
    },
  };
};
