import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
  return (
    <>
     <button  className="btn w-full btn-outline mb-4">
                <span className="pr-4">
                  <FcGoogle size={30} />
                </span>
                <span className=" text-xs md:text-sm ">
                  {" "}
                  continue with google
                </span>
              </button>
              
    </>
  )
}

export default SocialLogin