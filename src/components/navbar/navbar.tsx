"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { changeTheme } from "@/lib/features/theme";
import Tooltip from "@mui/material/Tooltip";
import * as Styled from "./navbar.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BasicModal from "../modal/modal";
import { toggleModal } from "@/lib/features/modal";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Navbar() {
  const currentTheme = useAppSelector((state) => state.theme.mode);
  const isModalOpen = useAppSelector((state) => state.modal.isModalOpen);
  const dispatch = useAppDispatch();
  const handleThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    dispatch(changeTheme(newTheme));
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [modalType, setModalType] = React.useState<String | null>("location");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const fetchModalBody = () => {
    switch (modalType) {
      case "location":
        return (
          <>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: "The Shawshank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 },
                { label: "The Godfather: Part II", year: 1974 },
              ]}
              sx={{ bgcolor: 'background.modal', color: "#ffffff" }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </>
        );
        break;
      default:
        return <>Hey</>;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicModal height="60%" width="70%" modalBody={() => fetchModalBody()} />
      <AppBar position="static">
        <Toolbar>
          <Tooltip
            title="Made by Anuj Singh | anujsingh.net"
            style={{ cursor: "pointer" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              BookTickets
            </Typography>
          </Tooltip>
          <Styled.Search
            className="w-[40rem]"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Styled.SearchIconWrapper>
              <SearchIcon />
            </Styled.SearchIconWrapper>
            <Styled.StyledInputBase
              className="w-full"
              placeholder="Search for movies, events, etc."
              inputProps={{ "aria-label": "search" }}
            />
          </Styled.Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }} className="mr-2">
            <Styled.DivWrapper>
              <Button
                onClick={() => {
                  dispatch(toggleModal(!isModalOpen));
                  setModalType("location");
                }}
              >
                Location &nbsp;
                <KeyboardArrowDownIcon />
              </Button>
            </Styled.DivWrapper>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleThemeChange}
            >
              {currentTheme === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}
