import { useState } from "react";
import {
  Box,
  IconButton,
  Toolbar,
  Stack,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuVertical from "./MenuVertical";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import CustomAppBar from "./components/CustomAppBar";
const drawerWidth = 280;

const MenuBar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CustomAppBar
        position="fixed"
        sx={{ height: "75px" }}
        open={open}
        drawerWidth={drawerWidth}
      >
        <Stack sx={{ pl: "30px", pr: "30px" }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Menu">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      marginRight: 5,
                    },
                    open && { display: "none" },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Stack
                sx={{
                  pl: "30px",
                }}
              >
                Logo
              </Stack>
            </Box>
            <Tooltip title="João">
              <Stack sx={{ p: "12px" }}>
                <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }} />
              </Stack>
            </Tooltip>
          </Toolbar>
        </Stack>
      </CustomAppBar>
      <MenuVertical
        open={open}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
      />
    </>
  );
};
export default MenuBar;
