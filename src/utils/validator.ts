import * as yup from "yup";

export const emailValidator = yup
  .string()
  .required("Email is a required field")
  .email("Invalid email format")
  .test(
    "afterDot",
    "Invalid email after dot format",
    (value: string | undefined) => {
      if (!value) return true;

      const dotIndex = value.lastIndexOf(".");
      if (dotIndex === -1) return true;

      const afterDot = value.substring(dotIndex + 1);
      return afterDot.length >= 2;
    },
  );

export const stringNotEmptyValidator = yup
  .string()
  .min(1)
  .required("Required field and not empty string");

export const numberNotEmptyValidator = yup
  .number()
  .positive()
  .required("Required field is number and not empty and greater than 0");

export const passwordValidator = yup
  .string()
  .required("Password is a required field")
  .min(8);

export const fullnameValidator = yup
  .string()
  .min(1)
  .required("Required field and not empty string")
  .required("Full name is a required field")
  .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Invalid full name format");

export const validateArraySelect = yup
  .array()
  .min(1, "option must select at least 1 item");

export const dateValidator = yup
  .string()
  .required("Required field and not empty string")
  .matches(
    /^(\d{4})-(\d{2})-(\d{2})$/,
    "Invalid date format, must be in YYYY-MM-DD format",
  );

export const telValidator = yup
  .string()
  .required("Required field and not empty string")
  .matches(/^[0-9]{10}$/, "Invalid phone number format");

export const confirmPasswordValidator = yup
  .string()
  .required("Password is a required field")
  .min(6)
  .oneOf([yup.ref("password")], "Passwords must match");

export const commentValidator = yup
  .string()
  .required("Comment is a required field")
  .min(1);

export const validator = {
  email: emailValidator,
  password: passwordValidator,
  fullname: fullnameValidator,
  dateOfBirth: dateValidator,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  username: stringNotEmptyValidator,
};
