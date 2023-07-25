"use client";
import "./globals.css";
import { Raleway } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Footer from "@/components/footer";
import { theme } from "../components/mui/breakpointContext";
import { ThemeProvider } from "@mui/material";
const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
        container={{
          parameters: {
            badge: "bottomleft",
            theme: "dark",
          },
        }}
      >
        <html lang="en">
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className={raleway.className}>{children}</body>
        </html>
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
