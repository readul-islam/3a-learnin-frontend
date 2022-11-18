import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../Schema";
import { intailValue } from "./constant";
const RegisterForm = () => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: intailValue,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      const { data } = await axios.post(
        "https://threealearning.onrender.com/api/v1/user/registration",
        { email, password }
      );

      console.log(data);
      if (data.success) {
        navigate("/login");
        toast.success("Registered Successfully", { id: 1 });
      }else{
        toast.error(data.massage, {id:1})
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...formik.getFieldProps("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="text-xs text-red-600 font-semibold">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            {...formik.getFieldProps("password")}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="text-xs text-red-600 font-semibold">
              {formik.errors.password}
            </small>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <small className="text-xs text-red-600 font-semibold">
              {formik.errors.confirmPassword}
            </small>
          ) : null}
        </div>
        <div className="flex items-start cursor-pointer">
          <div className="flex items-start  ">
            <div className="flex items-center  h-5">
              <input
                id="remember"
                type="checkbox"
                name="acceptCondition"
                {...formik.getFieldProps("acceptCondition")}
                className="w-4 h-4 bg-gray-50 rounded border  border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
        </div>
        {formik.touched.acceptCondition && formik.errors.acceptCondition ? (
          <small className="text-xs text-red-600 m-0 font-semibold">
            {formik.errors.acceptCondition}
          </small>
        ) : null}
        <button
          type="submit"
          className={`w-full bg-blue-700 hover:bg-blue-800  text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase`}
        >
          Register{" "}
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Login Now
          </Link>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
