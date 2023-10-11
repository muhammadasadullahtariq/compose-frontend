import { getCookie } from "cookies-next";
import checkUserExist from "./checkUserExist";

const createTrip = async (data) => {
  try {
    const user = await checkUserExist();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}createTrip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getCookie("token"),
      },
      body: JSON.stringify({
        ...data,
        userId: user.data._id,
      }),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default createTrip;
