"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Footer from "@/components/footer";

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
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </html>
    </GoogleReCaptchaProvider>
  );
}
