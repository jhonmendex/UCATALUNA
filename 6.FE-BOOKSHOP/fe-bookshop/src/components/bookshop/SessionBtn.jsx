import { Context } from "../../App";
import { useContext } from "react";
import { MenuItem } from "@mui/material";
import { Logout, Loupe } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";

const SessionBtn = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);

  const handleSession = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <>
      <MenuItem onClick={handleSession}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Cerrar sesión
      </MenuItem>
    </>
  );
};

export default SessionBtn;
