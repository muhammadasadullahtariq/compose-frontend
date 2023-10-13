import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import * as COLORS from "@/constants/colors";
import "./testimonial.css";

const Testimonial = ({ data }) => {
  return (
    <a
      href={`/itinerary/${data.numberOfDays}-days/${data.city
        .replace(/\s+/g, "-")
        .toLowerCase()}/${data._id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#F9F9F9",
          cursor: "pointer",
        }}
        className="tripContainer"
      >
        <img
          src={data?.headImage ? data.headImage : "/assets/img/cloud.jpeg"}
          width={"100%"}
          height={250}
          style={{
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
          className="tripImage"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            mb: "20px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              fontFamily: "raleway",
              color: COLORS.black,
              textAlign: "center",
            }}
          >
            {data?.city}
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              backgroundColor: COLORS.primary,
              "&:hover": {
                backgroundColor: COLORS.primary,
              },
            }}
          >
            View
          </Button>
        </Box>
      </Box>
    </a>
  );
};

export default Testimonial;
