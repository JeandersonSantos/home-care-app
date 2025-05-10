import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DrawerHeader from "../../components/drawerHeader";
import CustomDrawer from "./components/CustomDrawer";
import { useNavigate, Link, useLocation } from "react-router-dom";

interface MenuVerticalProps {
  open: boolean;
  handleDrawerClose: () => void;
  drawerWidth: number;
}

const MenuVertical: React.FC<MenuVerticalProps> = ({
  open,
  handleDrawerClose,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigateRouter = useNavigate();
  // const router = useMemo<Router>(() => {
  //   return {
  //     pathname,
  //     searchParams: new URLSearchParams(),
  //     navigate: (path) => {
  //       console.log("path", path);
  //       navigateRouter(`${path}`);

  //       setPathname(String(path));
  //     },
  //   };
  // }, [pathname]);
  return (
    <CustomDrawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {["Inbox"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
              onClick={() => {
                navigateRouter("/");
              }}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
                
              >
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};
export default MenuVertical;
