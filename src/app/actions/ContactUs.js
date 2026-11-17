"use server";

export const contactUs = async (data) => {
  const res = await fetch(
    `https://photooprps.com/api/contactus`,
    // `http://localhost:3000/api/contactus`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
