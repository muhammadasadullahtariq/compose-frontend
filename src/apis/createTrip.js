import { getCookie } from "cookies-next";

const createTrip = async (data) => {
  try {
    const token = getCookie("token");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createTrip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default createTrip;
