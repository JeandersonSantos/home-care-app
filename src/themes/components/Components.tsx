import { Components, Theme } from "@mui/material/styles";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Paper } from "./Paper";
import { AppBar } from "./AppBar";
import { SvgIcon } from "./SvgIcon";
import { TextField } from "./TextField";
import { Autocomplete } from "./Autocomplete";
export const ComponentsCustom = (
  palette: Theme["palette"]
): Components<Theme> => {
  const button = Button(palette);
  const typography = Typography(palette);
  const paper = Paper(palette);
  const appBar = AppBar(palette);
  const svgIcon = SvgIcon(palette);
  const textField = TextField(palette);
  const autoComplete = Autocomplete(palette);
  return {
    ...button,
    ...typography,
    ...paper,
    ...appBar,
    ...svgIcon,
    ...textField,
    ...autoComplete,
  };
};
