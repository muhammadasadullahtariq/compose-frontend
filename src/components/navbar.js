import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/navigation";
import ProtectedPageRoute from "@/app/protected-page-route";
import * as COLORS from "@/constants/colors";

const pages = ["Homepage", "About us", "How it works", "Login"];
const settings = [];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    console.log("close");
    const userLogedIn = ProtectedPageRoute();
    if (!userLogedIn) {
      router.push("/signin");
    } else {
      router.push("/questionary");
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/landing"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "relaway",
              fontWeight: 600,
              color: COLORS.primary,
              textDecoration: "none",
              fontSize: "20px",
              width: "171px",
              flexGrow: 1,
            }}
          >
            COMPOSETRIP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "relaway",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: COLORS.primary,
                alignSelf: "center",
              }}
            >
              ComposeTrip
            </Typography>
            <Button
              sx={{
                display: { xs: "flex", md: "none" },
                backgroundColor: COLORS.primary,
                color: "white",
                borderRadius: "20px",
                width: "79px",
                height: "27px",
                alignSelf: "center",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = COLORS.primary;
              }}
            >
              <Typography
                color="white"
                textAlign="center"
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "relaway",
                }}
              >
                Sign up
              </Typography>
            </Button>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "18px",
                    fontWeight: page == "Homepage" ? "700" : "500",
                    fontFamily: "relaway",
                    color: COLORS.black,
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
            <Button
              sx={{
                backgroundColor: COLORS.primary,
                color: "white",
                borderRadius: "20px",
                width: "128px",
                height: "41px",
                mr: 2,
              }}
              //hover effect
              onMouseOver={(e) => {
                e.target.style.backgroundColor = COLORS.primary;
              }}
            >
              <Typography
                color="white"
                textAlign="center"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "relaway",
                }}
              >
                Sign up
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
