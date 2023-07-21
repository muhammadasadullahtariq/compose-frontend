import { Grid } from "@mui/material";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <h5>COMPOSETRIP</h5>
                    <p>Your Next Adventure Begins Here</p>
                    <button className="plan_button">Plan your journey &nbsp;{'>'}</button>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>How it works</li>
                        <li>Testimonial</li>
                        <li>Contact Us</li>
                    </ul>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <h6>Subscribe to our newsletter</h6>
                    <p>Stay updated with travel inspirations and ComposeTrip updates.</p>
                    <form>
                        <input placeholder="Name" />
                        <input placeholder="Email" />
                        <button className="sub_button">Subscribe</button>
                    </form>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer