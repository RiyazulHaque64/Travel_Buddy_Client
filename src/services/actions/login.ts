"use server";

const login = async (credential: { email: string; password: string }) => {
  const res = await fetch(`http://localhost:5001/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  const data = res.json();
  return data;
};
