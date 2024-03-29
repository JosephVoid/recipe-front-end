import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import { useLocation } from "wouter";
import Button from "@mui/material/Button";
import logo from "../assets/recipe.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Cookies from "js-cookie";
import { signOut } from "../api";
import { AssignmentInd } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const pages = ["Recipes", "Shopping"];

function NavBar() {
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSignOut = () => {
    handleMenuClose();
    signOut().then((result) => {
      if (result) setLocation("/", { state: "Signed Out" });
    });
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [location, setLocation] = useLocation();
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";
  const items = useSelector((state: RootState) => state.shopping);

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {Cookies.get("user_id") === undefined && (
        <>
          <MenuItem onClick={() => setLocation(`/signin`)}>Log In</MenuItem>
          <MenuItem onClick={() => setLocation(`/signup`)}>Sign Up</MenuItem>
        </>
      )}

      {Cookies.get("user_id") && (
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      )}
    </Menu>
  );

  const handleMenuClick = (route: string) => {
    setLocation(`/${route}`);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} className="p-4">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="justify-between">
          <div className="flex">
            <MenuItem>
              <img src={logo} alt="" />
            </MenuItem>

            <MenuItem
              key={"Recipes"}
              onClick={() => handleMenuClick("Recipes".toLowerCase())}
            >
              <Typography textAlign="center" style={{ color: "black" }}>
                {"Recipes"}
              </Typography>
            </MenuItem>
            <MenuItem
              key={"Shopping"}
              onClick={() => handleMenuClick("Shopping".toLowerCase())}
            >
              <Badge badgeContent={items.length} color="primary">
                <Typography textAlign="center" style={{ color: "black" }}>
                  {"Shopping"}
                </Typography>
              </Badge>
            </MenuItem>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleProfileMenuOpen}>
              {Cookies.get("user_id") && <AssignmentInd fontSize="large" />}
              {Cookies.get("user_id") === undefined && (
                <PersonIcon fontSize="large"></PersonIcon>
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      {renderMenu}
    </AppBar>
  );
}
export default NavBar;
