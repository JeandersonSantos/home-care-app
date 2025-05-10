import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { Palette } from "./palette";
import { ComponentsCustom } from "./components/Components";

export const CustomTheme = () => {
  const palette = Palette();
  const components = ComponentsCustom(palette);
  const customTheme = createTheme({
    palette: {
      ...palette,
    },
    components: {
      ...components,
    },
  });

  return customTheme;
};
