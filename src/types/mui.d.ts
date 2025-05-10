import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tree: {
      main: string;
      dark: string;
      light: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    tree?: {
      main: string;
      dark: string;
      light: string;
      contrastText: string;
    };
  }
}