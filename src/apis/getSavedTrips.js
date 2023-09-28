import { getCookie } from "cookies-next";
import checkUserExist from "./checkUserExist";

const getSavedTrips = async () => {
  try {
    const user = await checkUserExist();
    //console.log("user data ", user);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}getTripsByUserId/${user.data._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getSavedTrips;
