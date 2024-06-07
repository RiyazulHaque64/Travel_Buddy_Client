"use server";

const signup = async (formData: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });
  const newUser = await res.json();
  return newUser;
};

export default signup;
