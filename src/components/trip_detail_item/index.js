import tick from "@/assets/images/tripDetails/icons/tick.svg";
import calender from "@/assets/images/tripDetails/icons/calender.svg";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import * as COLORS from "@/constants/colors";
import "./styles.css";

const TripDetailItem = ({ heading, subHeading, image }) => {
  return (
    <Box
      className="trip"
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Box
        sx={{
          height: { lg: 44, xs: 30 },
          width: { lg: 44, xs: 30 },
          borderRadius: "50%",
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: "5px",
        }}
      >
        <Image src={image ? tick : calender} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { lg: "14px", xs: "12px" },
            fontFamily: "Raleway",
            color: COLORS.textDark,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { lg: "24px", xs: "18px" },
            fontFamily: "popins",
            color: COLORS.textDark,
            paddingLeft: image ? "5px" : "0px",
          }}
        >
          {subHeading}
        </Typography>
      </Box>
    </Box>
  );
};

export default TripDetailItem;
