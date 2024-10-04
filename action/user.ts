"use server";

const register = async (formData: FormData) => {
  const email = formData.get("email") as String;
 
};

export default register;
