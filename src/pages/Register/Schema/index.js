import * as Yup from "yup";
export const registerSchema = Yup.object({
  
  email: Yup.string()
    .required("Please Enter your Email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Your email  invalid "
    ),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
      "Must 5 Characters,Uppercase, Lowercase, Number and  Special  Character"
    ),
  confirmPassword: Yup.string()
    .required("Please Enter your confrim password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  acceptCondition: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
});
