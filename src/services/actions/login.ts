"use server";

import { FieldValues } from "react-hook-form";

const login = async (credential: FieldValues) => {
  const res = await fetch(`http://localhost:5001/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  const data = res.json();
  console.log(data);
  return data;
};

export default login;
