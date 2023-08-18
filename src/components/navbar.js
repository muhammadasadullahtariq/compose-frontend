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
import { useRouter, usePathname } from "next/navigation";
import ProtectedPageRoute, { clearToken } from "@/app/protected-page-route";
import * as COLORS from "@/constants/colors";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { signOut, getAuth } from "firebase/auth";
import { firebase_app, auth } from "@/app/config";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";
import { setCookie, deleteCookie } from "cookies-next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ResponsiveAppBar({ userAuthChanged }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();
  const [signUpHide, setSignUpHide] = React.useState(false);
  const [pages, setPages] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const auth = getAuth();
  const pathName = usePathname();
  const [iModel, setIModel] = React.useState(false);
  const iModelHandle = () => {
    const userLogedIn = ProtectedPageRoute();
    console.log("hide sign up", userLogedIn, "sign up hide");
    if (userLogedIn) {
      setSignUpHide(true);
      if (pathName.includes("saved-itinerary")) {
        setPages(["Logout"]);
      } else if (pathName.includes("questionaire")) {
        document.getElementById("submitFormButton").click();
      } else {
        setPages(["Saved Trip", "Logout"]);
      }
    }
    setIModel(!iModel);
    if (userAuthChanged) {
      userAuthChanged();
    }
  };
  const [uModel, setUModel] = React.useState(false);
  const uModelHandle = () => {
    const userLogedIn = ProtectedPageRoute();
    console.log("hide sign up", userLogedIn, "sign up hide");
    if (userLogedIn) {
      setSignUpHide(true);
      if (pathName.includes("saved-itinerary")) {
        setPages(["Logout"]);
      } else if (pathName.includes("questionaire")) {
        document.getElementById("submitFormButton").click();
      } else {
        setPages(["Saved Trip", "Logout"]);
      }
    }
    setUModel(!uModel);
    if (userAuthChanged) {
      userAuthChanged();
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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
          setPages([]);
        })
        .catch((error) => {
          console.log(error);
          setMessage("Something went wrong");
          setSeverity("error");
          setOpen(true);
        });
    } else if (page == "Login") {
    } else if (page == "Saved Trip") {
      router.push("/saved-itinerary");
    }
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setCookie("token", token);
        userSessionHandler();
      } else {
        setSignUpHide(false);
        setPages([]);
      }
    });
  }, []);

  const userSessionHandler = () => {
    const userLogedIn = ProtectedPageRoute();
    if (userLogedIn) {
      setSignUpHide(true);
      if (pathName.includes("saved-itinerary")) {
        setPages(["Logout"]);
      } else {
        setPages(["Saved Trip", "Logout"]);
      }
    }
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        position: "fixed",
        boxShadow: "none",
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
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "raleway",
              fontWeight: 800,
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
              href="/"
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
              COMPOSETRIP
            </Typography>
            {!signUpHide && !pathName.includes("questionaire") && (
              // <SignUp
              //   open={iModel}
              //   handleModel={iModelHandle}
              //   popup={uModelHandle}
              // >
              <Button
                sx={{
                  display: { xs: "flex", md: "none" },
                  backgroundColor: COLORS.primary,
                  color: "white",
                  borderRadius: "20px",
                  height: "27px",
                  fontSize: "12px",
                  fontWeight: "500",
                  fontFamily: "raleway",
                  alignSelf: "center",
                }}
                onClick={() => {
                  setCookie("questionaireData", {});
                  deleteCookie("questionaireData");
                  //pass props to questionaire
                  router.push("/questionaire/where to", undefined, {
                    shallow: true,
                  });
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = COLORS.primary;
                }}
              >
                Get started
              </Button>
              // </SignUp>
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
              {!signUpHide && (
                <SignIn
                  open={iModel}
                  handleModel={iModelHandle}
                  popup={uModelHandle}
                >
                  <MenuItem id="loginButton">
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </SignIn>
              )}
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
              <SignIn
                open={uModel}
                handleModel={uModelHandle}
                popup={iModelHandle}
              >
                <MenuItem>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "raleway",
                      color: COLORS.black,
                    }}
                  >
                    Login
                  </Typography>
                </MenuItem>
              </SignIn>
            )}
            <SignUp
              open={iModel}
              handleModel={iModelHandle}
              popup={uModelHandle}
            >
              <MenuItem
                sx={{
                  display: "none",
                }}
              />
            </SignUp>

            {!signUpHide && !pathName.includes("questionaire") && (
              <Button
                sx={{
                  backgroundColor: COLORS.primary,
                  color: "white",
                  borderRadius: "20px",
                  padding: "7px 16px",
                  mr: 2,
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "raleway",
                }}
                onClick={() => {
                  setCookie("questionaireData", {});
                  deleteCookie("questionaireData");
                  router.push("/questionaire/where to", undefined, {
                    shallow: true,
                  });
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = COLORS.primary;
                }}
              >
                Get Started
              </Button>
              // </SignUp>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
