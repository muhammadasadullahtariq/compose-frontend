"use client";
import { useState, useEffect, useRef } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import SavedIcon from "@/assets/images/tripDetails/icons/save.png";
import OpenLink from "@/assets/images/tripDetails/icons/share.png";
import Image from "next/image";
import AppBar from "@/components/navbar";
import Footer from "@/components/footer";
import Itinerary from "@/components/modals/itinerary";
import "../style.css";
import getTripDetailById from "@/apis/getTripDetail";
import { useParams, useRouter } from "next/navigation";
import saveTrip from "@/apis/saveTrip";
import loadingGif from "@/assets/images/tripDetails/loader.gif";
import RegenerateTrip from "@/apis/regenerate";
import ProtectedPageRoute from "@/app/protected-page-route";
import CollapsibleField from "@/components/collapsAble";
import ResturantCollaspible from "@/components/resturants";
import Culture from "@/components/cultures";
import Health from "@/components/health";
import { useReactToPrint } from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";
import PrintScreen from "@/components/page";
import Xlogo from "@/assets/images/tripDetails/x.svg";
import Share from "@/components/modals/share";
import RegenerateIcon from "@/assets/images/tripDetails/icons/regenerate.svg";
import * as COLORS from "@/constants/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { firebase } from "@/app/config";
import ExpediaWidget from "@/components/expedia";
import { pageview, trackConversion } from "@/app/gtm";
import { loadFacebookPixel } from "@/app/facebookPixel";
import getTripDoDonts from "@/apis/generateDoDonts";
import SuggestionCollaspible from "@/components/suggestion";
import TripDetailItem from "@/components/trip_detail_item";

const TripDetail = () => {
  const [saveModal, setSaveModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [tripDetail, setTripDetail] = useState({});
  const [cityImage, setCityImage] = useState("");
  const [loading, setLoading] = useState(true);
  const { trip } = useParams();
  const [tripId, setTripId] = useState("");
  const [loadingMessage, setLoadingMessage] = useState(
    "Please wait while we are getting your trip"
  );
  const [cityCountry, setCityCountry] = useState("");
  const [hidePrint, setHidePrint] = useState(false);
  const componentRef = useRef();
  const [shareModal, setShareModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    pageview();
    trackConversion();
    loadFacebookPixel();
    (async () => {
      setLoading(true);
      const response = await getTripDetailById(trip);
      setLoading(false);
      setTripDetail(response.data.chatGptResponse);
      setCityCountry({
        city: response.data.city,
        country: response.data.country,
        date: response.data.startDate,
        travelingWith: response.data.travelingWith,
        numberOfDays: response.data.numberOfDays,
      });
      if (!response.data.chatGptResponse?.restaurants) {
        const doDont = await getTripDoDonts(response.data._id);
        setTripDetail(doDont.data.chatGptResponse);
      }
      setTripId(response.data._id);
    })();
    try {
      const analytics = firebase.analytics();
      if (typeof window !== "undefined") {
        analytics.logEvent("page_view", {
          page_path: window.location.pathname,
          page_location: window.location.href,
        });
      }
      //console.log("analytics", analytics);
    } catch (error) {}
  }, []);

  useEffect(() => {
    let foundImage = false;
    tripDetail?.trip?.forEach((element) => {
      if (!foundImage)
        element.activities.forEach((activity) => {
          if (activity?.image && !foundImage) {
            setCityImage(activity.image);
            foundImage = true;
          }
        });
    });
  }, [tripDetail]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Image src={loadingGif} height={200} width={200}></Image>
          <Typography>{loadingMessage}</Typography>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <AppBar />
        <Box
          className="hero-section"
          sx={{
            width: "100%",
            height: "80vh",
            backgroundImage:
              cityImage != ""
                ? `url(${cityImage})`
                : "url('/assets/img/cloud.jpeg')",
            marginTop: "60px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Container
              sx={{
                height: "100%",
                display: "flex",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    marginBottom: {
                      md: "30px",
                      xs: "25px",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    color={COLORS.white}
                    sx={{ fontSize: "24px", fontWeight: "700", fontFamily: "" }}
                  >
                    YOUR TRIP TO
                  </Typography>
                  <Typography
                    variant="h2"
                    color={COLORS.white}
                    sx={{
                      fontSize: { lg: "76px", xs: "34px" },
                      fontWeight: "700",
                    }}
                  >
                    {cityCountry?.city?.length > 0
                      ? cityCountry?.city
                          ?.join(", ")
                          .replace(/, $/, "")
                          .toUpperCase()
                      : cityCountry?.country?.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="h2"
                    color={COLORS.white}
                    sx={{
                      fontSize: { lg: "24px", xs: "20px" },
                      fontWeight: "500",
                    }}
                  >
                    {tripDetail?.aboutCity}
                  </Typography>
                </Box>
                {/* <Box
                className="print-component"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#D9D9D980",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: hidePrint ? "none" : "flex",
                }}
              >
                <Box
                  sx={{
                    padding: "5px 20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const user = ProtectedPageRoute();
                    if (user) {
                      setSaveModal(true);
                    } else {
                      alert("Please login to save trip");
                    }
                  }}
                >
                  <Image
                    src={SavedIcon}
                    width={11}
                    height={11}
                    alt="save-icon"
                  />
                </Box>
                <Box
                  sx={{
                    width: "1px",
                    height: "100%",
                    background: "#fff",
                  }}
                ></Box>
                <Box
                  sx={{
                    padding: "5px 20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShareModal(true);
                  }}
                >
                  <Image
                    src={OpenLink}
                    width={11}
                    height={11}
                    alt="save-icon"
                  />
                </Box>
              </Box> */}
              </Box>
            </Container>
          </Box>
        </Box>
        <Container
          sx={{
            backgroundColor: COLORS.white,
            position: "relative",
            transform: "translateY(-40%)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        >
          <Grid
            container
            sx={{
              padding: "10px",
            }}
          >
            <Grid item md={3} xs={12}>
              <TripDetailItem
                heading={"Adventure begins"}
                subHeading={new Date(cityCountry.date).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
                image={false}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <TripDetailItem
                heading={"Duration"}
                subHeading={cityCountry.numberOfDays}
                image={true}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <TripDetailItem
                heading={"Travel type"}
                subHeading={cityCountry.travelingWith}
                image={true}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Box
                sx={{
                  height: {
                    lg: "0px",
                    xs: "1px",
                  },
                  width: "100%",
                  backgroundColor: COLORS.gray,
                  marginTop: {
                    lg: "0px",
                    xs: "10px",
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  margin: {
                    xs: "0px 0px 20px 0",
                  },
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: "20px",
                    padding: "5px 20px",
                    width: { xs: "100%" },
                  }}
                  onClick={() => {
                    const user = ProtectedPageRoute();
                    if (user) {
                      setSaveModal(true);
                    } else {
                      alert("Please login to save trip");
                    }
                  }}
                >
                  <Image
                    src={SavedIcon}
                    width={11}
                    height={11}
                    alt="save-icon"
                    style={{ marginRight: "5px" }}
                  />
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    padding: "5px 20px",
                    backgroundColor: COLORS.primary,
                    width: { xs: "100%" },
                  }}
                  onClick={() => {
                    setShareModal(true);
                  }}
                >
                  <Image
                    src={OpenLink}
                    width={11}
                    height={11}
                    alt="share-icon"
                    style={{ marginRight: "5px" }}
                  />
                  Share
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            width: "100%",
            position: "relative",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "20px",
                }}
              />
              {tripDetail?.trip?.map((item, tripIndex) => (
                <CollapsibleField
                  item={item}
                  tripIndex={tripIndex}
                  tripLength={trip.length}
                  startDate={cityCountry?.date}
                />
              ))}
            </Box>
          </Container>
          <Typography
            sx={{
              color: COLORS.white,
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Raleway",
              textAlign: "center",
              padding: "10px",
              position: "fixed",
              bottom: "5px",
              left: "10px",
              zIndex: "100",
            }}
          >
            Share your trip with friends
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "56px",
              position: "fixed",
              bottom: "0px",
              background: "#2B92D5",
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
                color: "#fff",
                marginRight: "12px",
              }}
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send?text=
                 I just created my personalized trip plan to ${
                   cityCountry?.city?.length > 0
                     ? cityCountry?.city?.join(", ").replace(/, $/, "")
                     : cityCountry?.country
                 } using Composetrip : 
                  ${window.location.href}`
                );
              }}
            />
            <FacebookIcon
              onClick={() => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=www.composetrip.com/trip-detail/${tripId}`,
                  "_blank"
                );
              }}
              sx={{
                fontSize: "24px",
                color: "#fff",
                marginRight: "15px",
              }}
            />
            <Box
              sx={{
                color: "#fff",
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
                    } using Composetrip : 
                  ${window.location.href}`
                  );
                }}
              />
            </Box>
            <EmailIcon
              sx={{
                fontSize: "24px",
                color: "#fff",
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
                  } using Composetrip: ${window.location.href}`
                );
              }}
            />
            {/* <PrintIcon
              sx={{
                fontSize: "24px",
                color: "#fff",
                marginRight: "15px",
              }}
              onClick={handlePrint}
            /> */}
          </Box>
        </Box>
        <Container>
          <ResturantCollaspible restaurants={tripDetail?.restaurants} />

          <Culture
            dosCulture={tripDetail?.dosCulture}
            dontsCulture={tripDetail?.dontsCulture}
          />
          <Health
            dosHealth={tripDetail?.dosHealth}
            dontsHealth={tripDetail?.dontsHealth}
          />
          {tripDetail?.dosHealth?.length > 0 && tripDetail?.suggestions && (
            <SuggestionCollaspible suggestion={tripDetail?.suggestions} />
          )}
          <ExpediaWidget />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              flexDirection: "row",
              borderWidth: "1px",
              padding: "8px 15px",
              borderRadius: "161px",
              margin: "20px 0px",
              backgroundColor: COLORS.primary,
            }}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Box
              sx={{
                color: "#fff",
                marginRight: "5px",
              }}
            >
              <Image src={RegenerateIcon} width={20} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Start over
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              flexDirection: "row",
              padding: "8px 15px",
              borderRadius: "161px",
              minWidth: "120px",
              backgroundColor: COLORS.primary,
              marginBottom: "20px",
            }}
            onClick={handlePrint}
          >
            <PrintIcon
              sx={{
                fontSize: "24px",
                color: "#fff",
                marginRight: "5px",
              }}
            />
            <Typography
              sx={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Export to PDF
            </Typography>
          </Box>
        </Container>

        <Footer paddingBottom={true} />
        <Itinerary
          open={saveModal}
          handleModel={() => setSaveModal(!saveModal)}
          handerlSave={async (name) => {
            setSaveModal(false);
            const response = await saveTrip(trip, name);
            alert(response.message);
          }}
          modalFor="save"
        />
        <Itinerary
          open={openModal}
          handleModel={() => setOpenModal(!openModal)}
          handelCloseModal={() => {
            setOpenModal(false);
          }}
          handelYesModal={async () => {
            setOpenModal(false);
            router.push("/questionaire/whereto");
            // const user = ProtectedPageRoute();
            // if (user) {
            //   setLoading(true);
            //   setLoadingMessage(
            //     "Please wait while we are regenerating your plan. 2 to 5 secs tops!🚀🌈"
            //   );
            //   const response = await RegenerateTrip(tripId);
            //   setLoading(false);
            //   setTripDetail(response.data.chatGptResponse);
            //   setCityCountry({
            //     city: response.data.city,
            //     country: response.data.country,
            //     date: response.data.startDate,
            //   });
            //   setTripId(response.data._id);
            // } else {
            //   alert("Please login to regenerate your trip");
            // }
          }}
          modalFor="new"
        />
        <Share
          open={shareModal}
          handleModel={() => setShareModal(!shareModal)}
          tripId={tripId}
          cityCountry={cityCountry}
        />
        <span
          style={{
            display: "none",
          }}
        >
          <PrintScreen
            ref={componentRef}
            tripDetail={tripDetail}
            trip={trip}
            cityCountry={cityCountry}
            cityImage={cityImage}
            datee={new Date(cityCountry?.date)}
          />
        </span>
      </div>
    );
  }
};
export default TripDetail;
