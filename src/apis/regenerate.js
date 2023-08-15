import { getCookie } from "cookies-next";

const RegenerateTrip = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}regenerateTrip`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
        body: JSON.stringify({
          id,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Something went wrong" };
  }
};

export default RegenerateTrip;
