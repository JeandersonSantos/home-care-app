import { Outlet } from "react-router-dom";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import {  Box, Stack } from "@mui/material";
import DrawerHeader from "../../components/drawerHeader";

const Layout = () => {

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Box component="header">
        <Menu />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column", 
        }}
      >
        <DrawerHeader />
        <Stack sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Stack>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
