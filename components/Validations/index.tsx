export const validateEmail = (email: string) => {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return regex.test(email);
};
export const validatePhone = (phone: string) => {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return regex.test(phone);
};
export const validateName = (name: string) => {
  const regex = /^[a-zA-Z ]*$/;
  return regex.test(name);
};

export const ValidateInput = (
  type: string,
  val: string,
  valueSetter?: any,
  errorSetter?: any
) => {
  if (type !== "phone" && val.length <= 0) {
    valueSetter(val);
    errorSetter("This field is required!");
  } else if (type !== "phone" && val.length > 0) {
    if (type === "normal") {
      if (validateName(val)) {
        valueSetter(val);
        errorSetter("");
      } else {
        valueSetter(val);
        errorSetter("Enter a valid name!");
      }
    } else if (type === "email") {
      if (validateEmail(val)) {
        valueSetter(val);
        errorSetter("");
      } else {
        valueSetter(val);
        errorSetter("Enter a valid email address!");
      }
    } else if (type === "text") {
      valueSetter(val);
      errorSetter("");
    }
  } else if (type === "phone") {
    if (val.length > 0) {
      if (validatePhone(val)) {
        valueSetter(val);
        errorSetter("");
      } else {
        valueSetter(val);
        errorSetter("Enter a valid phone number! (e.g. 055-555-5555)");
      }
    } else {
      valueSetter(val);
      errorSetter("");
    }
  }
};
