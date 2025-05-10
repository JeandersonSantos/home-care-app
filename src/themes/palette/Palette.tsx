import {
  BackgroundLight,
  PrimaryLight,
  SecondaryLight,
  ThreeLight,
} from "../colors/light";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const Palette = () => {
  const baseTheme = createTheme();

  const themeOptions: ThemeOptions = {
    palette: {
      ...baseTheme.palette,
      primary: PrimaryLight,
      secondary: SecondaryLight,
      tree: ThreeLight,
      background: BackgroundLight,
    },
  };

  const customTheme = createTheme(themeOptions);

  return customTheme.palette;
};
