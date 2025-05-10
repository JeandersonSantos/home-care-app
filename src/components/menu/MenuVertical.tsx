import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack
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
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

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
    const location = useLocation();
    const listItemsMenu = [
        {
        text: "Atendimento Emergencial",
        icon: <LocalHospitalIcon />,
        path: "/",
        },
        {
        text: "Registros de Atendimentos",
        icon: <ListAltIcon />,
        path: "/records",
        },
    ]
  return (
    <CustomDrawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <DrawerHeader>
        <Stack width="100%" pl="15px" display="flex" direction="row" alignItems="center" justifyContent={"space-between"}>
            <Stack display="flex" direction="row" gap='15px'>
                <MedicalServicesIcon/>
                <Typography variant="h6" fontWeight={600} color={theme.palette.secondary.main}>Serviços</Typography>
            </Stack>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
                <ChevronRightIcon />
            ) : (
                <ChevronLeftIcon />
            )}
            </IconButton>
        </Stack>
      </DrawerHeader>
      <Divider />
      <List>
        {listItemsMenu.map((item) => {
        const isSelected = location.pathname === item.path; 

         return (
            <ListItem 
                key={item.text}
                disablePadding
                sx={{
                display: "block" ,
                bgcolor: isSelected ? "rgba(16, 126, 143, 0.1)" : "inherit", // Fundo branco transparente para o item selecionado
            }}>
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
                    navigateRouter(item.path);
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
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.text}
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
         )
        })}
      </List>
    </CustomDrawer>
  );
};
export default MenuVertical;
