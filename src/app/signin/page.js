"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase_app, { signIn, auth } from "../config";
import GoogleButton from "react-google-button";
import checkUserExist from "@/apis/checkUserExist";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import registerUser from "@/apis/registerUser";
import Or from "@/components/Or";
import PersonIcon from "@mui/icons-material/Person";
import { Lock, RemoveRedEye } from "@mui/icons-material";
import SignUp from "@/components/signup";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn({ closeModel, popup }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.get("email"),
        data.get("password")
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      setCookie("token", token);
      //router.refresh();
      window.location.reload();
      //router.push("/");
      //const userExist = await checkUserExist();
      console.log(userExist);
      // if (userExist?.message == "User found") {
      //   setCookie("uid", userExist.data._id);
      //   setCookie("user", userExist.data);
      //   setOpen(true);
      //   setMessage("User Signed In Successfully");
      //   setSeverity("success");
      //   closeModel();
      // } else {
      //   console.log("user not exist");
      // }
    } catch (error) {
      console.log(error);
      setOpen(true);
      setMessage(error.message);
      setSeverity("error");
    }
  };

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setCookie("token", token);
        //router.refresh();
        //window.location.reload();
        //router.push("/");
        const userExist = await checkUserExist();
        if (userExist?.data?.name) {
          setCookie("user", userExist.data);
          setOpen(true);
          setMessage("User Signed In Successfully");
          setSeverity("success");
          closeModel();
        } else {
          if (
            user.displayName == null ||
            user.displayName == "" ||
            user.displayName == undefined
          ) {
            await userRegisterHandaler(user.email);
          } else {
            await userRegisterHandaler(user.displayName);
          }
        }
      }
    });
  }, []);

  const userRegisterHandaler = async (name) => {
    try {
      const userData = await registerUser(name);
      if (userData?.message == "User Created") {
        setCookie("user", userData.data);
        setOpen(true);
        setMessage("User Created Successfully");
        setSeverity("success");
        closeModel();
      } else {
        setOpen(true);
        setMessage(userData.message);
        setSeverity("error");
        closeModel();
      }
    } catch (error) {
      //router.refresh();
      //router.push("/");
      console.log(error);
      closeModel();
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div component="main">
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GoogleButton
            label="Continue with Google"
            className="google-button"
            onClick={signIn}
            style={{
              borderRadius: "100px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "#fff",
              color: "#333",
              border: "1px solid #D2D4DA",
              boxShadow: "none",
            }}
          />
          <Or />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <label>Email or Username</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="abcxyz@gmail.com"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: <PersonIcon />,
              }}
            />
            <label>Password</label>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              placeholder="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: <Lock />,
              }}
            />
            <Typography as="p" textAlign={"right"}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Typography as="p" textAlign={"center"}>
              Don't have an account?{" "}<a onClick={popup}>Signup</a>
            </Typography>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
