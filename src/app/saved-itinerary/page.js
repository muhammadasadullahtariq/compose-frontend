"use client";
import { useState, useEffect } from "react";
import AppBar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SavedItineraryIcon from "@/assets/images/savedItinerary/icons/save-itinerary.svg";
import DeleteIcon from "@/assets/images/savedItinerary/icons/delete.svg";
const options = ["Delete"];
import getSavedTrips from "@/apis/getSavedTrips";
import ProtectedPageRoute from "../protected-page-route";
import loadingGif from "@/assets/images/tripDetails/loader.gif";
import deleteTrip from "@/apis/deleteTrip";

const SavedItinerary = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [savedTrips, setSavedTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    console.log("handleClose", id);
    if (id) {
      (async () => {
        setLoading(true);
        setLoadingMessage("Please wait while we are deleting your trip");
        await deleteTrip(id);
        setLoadingMessage("Please wait while we are getting your updated trip");
        const response = await getSavedTrips();
        console.log("response", response);
        setLoading(false);
        setSavedTrips(response.data);
      })();
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      setLoadingMessage("Please wait while we are getting your trips");
      const response = await getSavedTrips();
      setLoading(false);
      console.log("response", response);
      setSavedTrips(response.data);
    })();
  }, []);

  if (loading) {
    return (
      <div>
        <AppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: { md: "90vh", xs: "calc(100vh - 64px)" },
            backgroundColor: "#FCFCFF",
            marginTop: "60px",
          }}
        >
          <Image src={loadingGif} height={200} width={200}></Image>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "500",
              marginTop: "20px",
              paddingRight: "20px",
              paddingLeft: "20px",
              textAlign: "center",
            }}
          >
            {loadingMessage}
          </Typography>
        </Box>
      </div>
    );
  } else {
    return (
      <>
        <AppBar
          userAuthChanged={async () => {
            const response = await getSavedTrips();
            console.log("response", response);
            setSavedTrips(response.data);
          }}
        />
        <Container
          sx={{
            marginTop: "60px",
          }}
        >
          <Box sx={{ padding: "20px 0" }}>
            <Typography
              variant="h3"
              sx={{ fontSize: "22px", fontWeight: "500" }}
            >
              Saved Itineraries
            </Typography>
            {savedTrips.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { md: "90vh", xs: "calc(100vh - 64px)" },
                  backgroundColor: "#FCFCFF",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "22px",
                    fontWeight: "500",
                    marginTop: "20px",
                    paddingRight: "20px",
                    paddingLeft: "20px",
                    textAlign: "center",
                  }}
                >
                  {ProtectedPageRoute()
                    ? "You don't have any saved itineraries yet."
                    : "Please login to see your saved itineraries."}
                </Typography>
              </Box>
            ) : (
              savedTrips.map((trip) => (
                <Box sx={{ margin: "15px 0" }}>
                  <Box
                    sx={{
                      padding: "15px",
                      background: "#F9F9F9",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: "15px" }}>
                        <Box>
                          <Image src={SavedItineraryIcon} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            {trip.tag}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "300",
                              color: "#757780",
                            }}
                          >
                            {trip.country} {trip.city.join(", ")}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <div>
                          <MoreVertIcon
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                          />

                          <Menu
                            id="long-menu"
                            MenuListProps={{
                              "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => handleClose(trip._id)}
                            PaperProps={{
                              style: {
                                width: "150px",
                                padding: "0px",
                              },
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem
                                key={option}
                                onClick={() => handleClose(trip._id)}
                                sx={{
                                  fontSize: "12px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                }}
                              >
                                <Image src={DeleteIcon} /> <span>{option}</span>
                              </MenuItem>
                            ))}
                          </Menu>
                        </div>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                      }}
                    >
                      <Button
                        sx={{
                          background: "#2B92D5",
                          color: "#F9F9F9",
                          padding: "5px 22px",
                          fontSize: "10px",
                          borderRadius: "20px",
                        }}
                        onClick={() => {
                          window.location.href = `/trip-detail/${trip._id}`;
                        }}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Container>
      </>
    );
  }
};

export default SavedItinerary;
