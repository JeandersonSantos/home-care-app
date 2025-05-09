import { Outlet } from "react-router-dom";
import Menu from "../../components/menu";
import Footer from "../../components/footer";

import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box component="header">
        <Menu />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "76px",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
