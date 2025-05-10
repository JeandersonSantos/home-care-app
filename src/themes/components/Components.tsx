import { Components, Theme } from "@mui/material/styles";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Paper } from "./Paper";
import { AppBar } from "./AppBar";
import { SvgIcon } from "./SvgIcon";

export const ComponentsCustom = (
  palette: Theme["palette"]
): Components<Theme> => {
  const button = Button(palette);
  const typography = Typography(palette);
  const paper = Paper(palette);
  const appBar = AppBar(palette);
  const svgIcon = SvgIcon(palette);

  return {
    ...button,
    ...typography,
    ...paper,
    ...appBar,
    ...svgIcon,
  };
};
