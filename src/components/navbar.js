"use client";
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
import ProtectedPageRoute, { clearToken } from "@/app/protected-page-route";
import * as COLORS from "@/constants/colors";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { signOut, getAuth } from "firebase/auth";
import { firebase_app } from "@/app/config";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const [signUpHide, setSignUpHide] = React.useState(false);
  const [pages, setPages] = React.useState([
    "Homepage",
    "About us",
    "How it works",
    "Login",
  ]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const auth = getAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if (page == "Logout") {
      signOut(auth)
        .then(() => {
          setMessage("Logout successfully");
          setSeverity("success");
          setOpen(true);
          clearToken();
          setSignUpHide(false);
          setPages(["Homepage", "About us", "How it works", "Login"]);
          router.push("/landing");
        })
        .catch((error) => {
          console.log(error);
          setMessage("Something went wrong");
          setSeverity("error");
          setOpen(true);
        });
    } else if (page == "Login") {
      router.push("/signin");
    } else if (page == "Homepage") {
      router.push("/landing");
    }
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

  React.useEffect(() => {
    const userLogedIn = ProtectedPageRoute();
    console.log("hide sign up", userLogedIn, "sign up hide");
    if (userLogedIn) {
      setSignUpHide(true);
      setPages(["Homepage", "About us", "How it works", "Logout"]);
    }
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/landing"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "raleway",
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
                fontFamily: "raleway",
                fontWeight: 700,
                color: COLORS.primary,
                alignSelf: "center",
                fontSize: "16px",
              }}
            >
              ComposeTrip
            </Typography>
            {!signUpHide && (
              <SignUp>
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
                      fontFamily: "raleway",
                    }}
                  >
                    Sign up
                  </Typography>
                </Button>
              </SignUp>
            )}
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
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "18px",
                    fontWeight: page == "Homepage" ? "700" : "500",
                    fontFamily: "raleway",
                    color: COLORS.black,
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}

            {!signUpHide && (
              <SignUp>
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
                      fontFamily: "raleway",
                    }}
                  >
                    Sign up
                  </Typography>
                </Button>
              </SignUp>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
