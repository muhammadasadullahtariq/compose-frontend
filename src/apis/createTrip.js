import { getCookie } from "cookies-next";
import checkUserExist from "./checkUserExist";

const createTrip = async (data) => {
  try {
    const token = getCookie("token");
    const user = await checkUserExist();
    console.log("user data ", user);
    const res = await fetch(`http://localhost:3000/api/createTrip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getCookie("token"),
      },
      body: JSON.stringify({
        ...data,
        user: user.data._id,
      }),
    });
    const result = await res.json();
    console.log("result of trip", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default createTrip;
