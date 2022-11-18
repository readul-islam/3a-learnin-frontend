import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { intailValue } from "./constant";

const LoginForm = () => {
  
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: intailValue,

    onSubmit: async (values) => {
      const { email, password } = values;
      const { data } = await axios.get(
        "https://threealearning.onrender.com/api/v1/user/login",
        { params: { email, password } }
      );
      console.log(data);
      if (data.success) {
        toast.success("Login Successfully", { id: 1 });
        navigate("/home");
      }else{
        toast.error(data.massage, { id: 1 });
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-6" action="#">
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
      
       
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
         <div className="relative">
         <input 
            type={`${show? 'text':'password'}`}
            name="password"
            id="password"
            {...formik.getFieldProps("password")}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
           {!show ?  <AiFillEyeInvisible onClick={()=>setShow(true)} className="text-black absolute cursor-pointer right-2  top-2" size={20}/> :
          <AiFillEye onClick={()=> setShow(false)} className="text-black absolute right-2 cursor-pointer top-2" size={20}/> 
          
         }
         </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                name="remember"
                {...formik.getFieldProps("remember")}
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
        >
          Sign in{" "}
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/register"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
