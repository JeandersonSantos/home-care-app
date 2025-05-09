import { useState } from "react";
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Container,
  Stack,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenMenu = (event: any) => {
    console.log("event.currentTarget", event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#4ce0fd" }} className="menu">
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
              <IconButton size="large" onClick={handleOpenMenu} color="inherit">
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
    </AppBar>
  );
};
export default MenuBar;
