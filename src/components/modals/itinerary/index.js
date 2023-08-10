import { useState } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import Input from "@/components/atomic/input";
const Itinerary = ({ open, handleModel, modalFor, handerlSave }) => {
  const [itinerary, setItinerary] = useState("");
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
          height: "172px",
          borderRadius: "10px",
          padding: "20px 25px",
        }}
      >
        {modalFor === "new" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Are you sure you want to discard previous itinerary?
            </Typography>
            <Box
              sx={{
                marginTop: "28px",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  padding: "5px 25px",
                  color: "#F9F9F9",
                  background: "#2B92D5",
                  fontSize: "12px",
                  borderRadius: "20px",
                }}
              >
                Yes
              </Button>
              <Button
                sx={{
                  padding: "5px 25px",
                  color: "#757780",
                  background: "transparent",
                  fontSize: "12px",
                  borderRadius: "20px",
                }}
              >
                No
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", fontWeight: "500", marginBottom: "10px" }}
            >
              Itinerary name:
            </Typography>
            <Input value={itinerary} setValue={setItinerary} />
            <Box
              sx={{
                marginTop: "28px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                sx={{
                  padding: "5px 25px",
                  color: "#F9F9F9",
                  background: "#2B92D5",
                  fontSize: "12px",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  handerlSave(itinerary);
                }}
              >
                save
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default Itinerary;
