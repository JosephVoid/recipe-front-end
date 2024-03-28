import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import logo from "../assets/recipe.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const pages = ["Receipes", "Shopping"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";
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
      <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Click");
  };

  const handleMenuClick = (route: string) => {
    console.log(route);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} className="p-4">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="justify-between">
          <div className="flex">
            <MenuItem>
              <img src={logo} alt="" />
            </MenuItem>

            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => handleMenuClick(page.toLowerCase())}
              >
                <Typography textAlign="center" style={{ color: "black" }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleProfileMenuOpen}>
              <PersonIcon fontSize="large"></PersonIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      {renderMenu}
    </AppBar>
  );
}
export default NavBar;
