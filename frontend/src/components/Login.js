import React, { useState } from "react";
import twitter from "../Images/64cebe06bc8437de66e41758_X-EverythingApp-Logo-Black-Twitter.jpg";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const LoginSignupHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen  flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-4 mt-11"
            src={twitter}
            width={"350px"}
            alt="twitter-logo"
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening now.</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form className="flex flex-col w-[60%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-500 outline-blue-500 rounded-lg px-3 py-2 m-1 
                font-semibold"
                />
                <input
                  type="text"
                  placeholder="UserName"
                  className="border border-gray-500 outline-blue-500 rounded-lg px-3 py-2 m-1
                font-semibold"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-500 outline-blue-500 rounded-lg px-3 py-2 m-1 font-semibold"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-500 outline-blue-500 rounded-lg px-3 py-2 m-1
              font-semibold"
            />
            <button className="bg-[#1D9BF0]  py-2 rounded-full my-4 text-white text-lg">
              {isLogin ? "Login" : "Signup"}
            </button>
            <h1>
              {isLogin ? "Dont have an account?" : "Already have an account?"}
              {""}
              <span
                onClick={LoginSignupHandler}
                className="cursor-pointer underline font-bold text-blue-600"
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
