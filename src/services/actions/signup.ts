"use server";

const signup = async (formData: FormData) => {
  const res = await fetch(`http://localhost:5001/api/register`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });
  const newUser = await res.json();

  return newUser;
};

export default signup;
