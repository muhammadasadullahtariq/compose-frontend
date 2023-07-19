import { getCookie } from "cookies-next";

const createSubscription = async (uid, token) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}createSubscription`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": getCookie("token"),
        },
        body: JSON.stringify({
          userId: uid,
          subscriptionTypeId: 1,
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

export default createSubscription;
