const registerUser = async (name, phone, toekn) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}registerUser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": toekn,
      },
      body: JSON.stringify({
        name,
        phone,
      }),
    }
  );
  const data = await response.json();
  return data;
};

export default registerUser;
