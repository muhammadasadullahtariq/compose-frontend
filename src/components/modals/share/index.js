import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import Xlogo from "@/assets/images/tripDetails/x.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import * as COLORS from "@/constants/colors";

const Share = ({ open, handleModel, cityCountry, tripId }) => {
  return (
    <Modal
      open={open}
      onClose={handleModel}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: {
            md: "430px",
            xs: "320px",
          },
          borderRadius: "10px",
          padding: "20px 25px",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}
          >
            Share Your Trip
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: "56px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <WhatsAppIcon
              sx={{
                fontSize: "24px",
                color: COLORS.primary,
                marginRight: "15px",
              }}
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send?text=
                 I just created my personalized trip plan to ${
                   cityCountry?.city?.length > 0
                     ? cityCountry?.city?.join(", ").replace(/, $/, "")
                     : cityCountry?.country
                 } using ComposeTrip : 
                  ${window.location.href}`
                );
                handleModel();
              }}
            />
            <FacebookIcon
              sx={{
                fontSize: "24px",
                color: COLORS.primary,
                marginRight: "15px",
              }}
              onClick={() => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=www.composetrip.com/itinerary/${cityCountry.numberOfDays}-days/${cityCountry.city[0]}/${tripId}`
                );
                handleModel();
              }}
            />
            <Box
              sx={{
                color: COLORS.primary,
                marginRight: "15px",
              }}
            >
              <Image
                src={Xlogo}
                width={20}
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=I just created my personalized trip plan to ${
                      cityCountry?.city?.length > 0
                        ? cityCountry?.city?.join(", ").replace(/, $/, "")
                        : cityCountry?.country
                    } using ComposeTrip : 
                  ${window.location.href}`
                  );
                  handleModel();
                }}
              />
            </Box>
            <EmailIcon
              sx={{
                fontSize: "24px",
                color: COLORS.primary,
                marginRight: "15px",
              }}
              onClick={() => {
                window.open(
                  `mailto:?subject= Trip plan to ${
                    cityCountry?.city?.length > 0
                      ? cityCountry?.city?.join(", ").replace(/, $/, "")
                      : cityCountry?.country
                  }
                  &body=I just created my personalized trip plan to ${
                    cityCountry?.city?.length > 0
                      ? cityCountry?.city?.join(", ").replace(/, $/, "")
                      : cityCountry?.country
                  } using ComposeTrip: ${window.location.href}`
                );
                handleModel();
              }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default Share;
