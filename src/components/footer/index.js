import { Grid, Container } from "@mui/material";
import "./footer.css";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="footer">
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
                deleteCookie("questionaireData");
                router.push("/questionaire/where to");
              }}
              className="plan_button"
            >
              Get Started&nbsp;{">"}
            </button>
          </Grid>
          {/* <Grid item xs={6} md={3}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
            </ul>
          </Grid> */}
          <Grid item xs={6} md={3}>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h6>Subscribe to our newsletter</h6>
            <p>
              Stay updated with travel inspirations and ComposeTrip updates.
            </p>
            <form>
              <input
                placeholder="Name"
                style={{
                  color: "white",
                }}
              />
              <input
                placeholder="Email"
                style={{
                  color: "white",
                }}
              />
              <button className="sub_button">Subscribe</button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
