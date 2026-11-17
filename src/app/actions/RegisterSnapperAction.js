"use server";

export const registerSnapperAction = async (data) => {
  const res = await fetch(
    // `http://localhost:3000/api/register-snaper`,
    `https://hi.photooprps.com/api/register-snaper`,
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
