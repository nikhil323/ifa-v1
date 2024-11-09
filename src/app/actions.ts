"use server";

//handle form submit
export const handleSubmit = async ({ hasAccount, company, formData }: any) => {
  console.log("running handle submit", hasAccount, company, formData);
  // e?.preventDefault();
  if (hasAccount && company) {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const response = await fetch("https://some/dummy/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("response", response);
      const data = await response.json();
      console.log("the response data is", data);
    } catch (e) {
      console.log("error login", e);
    }
  } else if (hasAccount && !company) {
    console.log("trying to login personal account");
  } else if (!hasAccount && company) {
    console.log("tyring to register company account");
  } else if (!hasAccount && !company) {
    console.log("tying to register perosnal account");
  }
};
