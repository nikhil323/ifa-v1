export const passwordRegx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const passwordMsg =
  "Password should contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and be min 8 character long";

export const confirmPasswordMsg = "Confirm Password should match password";

export const altPhoneMsg = "Alt Phone number cannot be more than 10 character";

export const phoneMsg = "Phone number cannot be more than 10 character";
