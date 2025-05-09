import { Outlet } from "react-router-dom";
// import Menu from "../../components/menu";
// import Footer from "../sections/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Box component="header">
        {/* <Menu /> */}
        <h1>Menu</h1>
      </Box>
      <div
        style={{
          marginTop: "76px",
        }}
      >
        <Outlet />
      </div>
      <Box component="footer">
        {/* <Footer /> */}
        <h1>Footer</h1>
      </Box>
    </div>
  );
};

export default Layout;
