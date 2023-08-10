import { getCookie } from "cookies-next";
import checkUserExist from "./checkUserExist";

const saveTrip = async (trip, tag) => {
  try {
    const user = await checkUserExist();
    console.log("user data ", user);
    const response = await fetch(`http://localhost:3000/api/saveTripWithTag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getCookie("token"),
      },
      body: JSON.stringify({
        trip,
        tag,
        userId: user.data._id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default saveTrip;
