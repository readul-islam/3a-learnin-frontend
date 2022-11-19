import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import RegisterForm from "./form/RegisterForm";

const Register = () => {
  let navigate = useNavigate();

  return (
    <>
      <div
        style={{
          backgroundImage: "url(http://www.3alearningsolutions.com/static/media/work.f409bf2ff060a2fa9708.png)",
         
        }}
        className="hero min-h-screen   "
      >
        <div className=" hero-overlay bg-opacity-70 flex justify-center items-center ">
          <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:px-8 px-0 text-white">
            <h1 className=" text-2xl md:text-5xl font-bold">Register now!</h1>
            <p className="py-6 text-md  md:text-2xl font-semibold ">
              Achieve Professional Excellence With 1000+ Globally-acclaimed
            </p>
            <p className=" text-sm  md:text-xl  ">
              3a Learning solutions India Pvt. Limited (ISO 9001:2015 Certified)
              was founded in August 2014. We are the industry leader in
              technology and people management training and consultancy.
            </p>
          </div>
          <div className=" flex-shrink-0 w-full xl:max-w-lg max-w-md">
            <div className="p-4  bg-white  border border-gray-200 rounded-lg shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              <RegisterForm/>
              <div className="divider">OR</div>
              <SocialLogin />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
