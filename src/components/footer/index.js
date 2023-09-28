"use client";
import { Grid, Container } from "@mui/material";
import "./footer.css";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import sendMail from "@/apis/sendMail";
import { useState, useEffect } from "react";
import getLatestTrips from "@/apis/getLatestTrip";

const Footer = ({ paddingBottom }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [latestTrip, setGetLatestTrip] = useState([]);

  useEffect(() => {
    (async () => {
      const responce = await getLatestTrips();
     // console.log(responce);
      setGetLatestTrip(responce.data);
    })();
  }, []);

  return (
    <footer
      className="footer"
      style={{
        paddingBottom: paddingBottom ? 90 : 0,
      }}
    >
      <Container>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} sm={6} md={3}>
            <h5>COMPOSETRIP</h5>
            <p>Your Next Adventure Begins Here</p>
            <button
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                localStorage.removeItem("questionaireData");
                router.push("/questionaire/whereto");
              }}
              className="plan_button"
            >
              Get Started&nbsp;{">"}
            </button>
          </Grid>
          <Grid item xs={6} md={3}>
            <ul>
              <li>
                <a href="https://sites.google.com/ripeseed.io/privacypolices/home">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://sites.google.com/ripeseed.io/privacy-policy/home">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="mailto:Info@composetrip.com">Contact Us</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <ul>
              <h6>Latest Trips</h6>
              {latestTrip?.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`/itinerary/${item.numberOfDays}-days/${item.city[0]
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/${item._id}`}
                    >
                      {item.city[0]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h6>Subscribe to our newsletter</h6>
            <p>
              Stay updated with travel inspirations and ComposeTrip updates.
            </p>
            <form>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                placeholder="Name"
                style={{
                  color: "white",
                }}
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email"
                style={{
                  color: "white",
                }}
              />
              <button
                onClick={(e) => {
                  if (!name || !email) {
                    alert("Please fill all the fields");
                    return;
                  }
                  e.preventDefault();
                  alert("Thank you for subscribing");
                  sendMail(name, email);
                }}
                className="sub_button"
              >
                Subscribe
              </button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
