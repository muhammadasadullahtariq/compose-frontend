import { getCookie } from "cookies-next";

const updateTrip = async (id, data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}updateTrip`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
        body: JSON.stringify({
          id,
          data,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default updateTrip;
