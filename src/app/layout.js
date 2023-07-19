"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
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
        <body className={inter.className}>{children}</body>
      </html>
    </GoogleReCaptchaProvider>
  );
}
