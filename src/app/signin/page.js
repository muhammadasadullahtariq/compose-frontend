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

export default function SignIn() {
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
      const userExist = await checkUserExist();
      console.log(userExist);
      if (userExist?.message == "User found") {
        setCookie("uid", userExist.data._id);
        setCookie("user", userExist.data);
        setOpen(true);
        setMessage("User Signed In Successfully");
        setSeverity("success");
        router.push("/landing");
      } else {
        console.log("user not exist");
        router.push("/signup");
      }
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
        const userExist = await checkUserExist();
        if (userExist?.data?.name) {
          setCookie("user", userExist.data);
          setOpen(true);
          setMessage("User Signed In Successfully");
          setSeverity("success");
          router.push("/landing");
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
    const userData = await registerUser(name);
    if (userData?.message == "User Created") {
      setCookie("user", userData.data);
      setOpen(true);
      setMessage("User Created Successfully");
      setSeverity("success");
      router.push("/landing");
    } else {
      setOpen(true);
      setMessage(userData.message);
      setSeverity("error");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: "100vh",
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <GoogleButton onClick={signIn} />
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
