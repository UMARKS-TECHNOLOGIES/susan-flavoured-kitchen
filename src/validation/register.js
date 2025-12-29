import *as Yup from "yup"

export const registerSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters")
        .required("Full Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        // .matches(
        //     // /^\+?[1-9]\d{1,14}$/,
        //     "Phone number is not valid"
        // )
        .required("Phone number is required"),
     password: Yup.string()
    .required("Password is required")
    .matches(/.{8,}/, "Minimum 8 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[0-9&@%]/, "At least one number or special symbol (&@%)"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required"),
});