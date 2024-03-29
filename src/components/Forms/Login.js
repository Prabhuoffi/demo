import { useState } from "react";
import { FaCheckSquare, FaSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
    rememberMe: false,
  });

  const { email, password, showPassword, rememberMe } = formData;

  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  const handleRememberMe = () => {
    setFormData({ ...formData, rememberMe: !rememberMe });
  };

  const passwordInputType = showPassword ? "text" : "password";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <>
      <section className="py-24 md:py-22 bg-gray-200">
        <div className="sm:mx-auto p-7  bg-white sm:rounded-lg sm:max-w-md">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Sign in to your account
              </h3>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-600 font-medium"
                  htmlFor="email"
                >
                  E-Mail
                </label>
                <input
                  onChange={onChangeInput}
                  value={email}
                  name="email"
                  id="email"
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="email"
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="mb-4 relative">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={onChangeInput}
                    name="password"
                    id="password"
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md pl-3 pr-3 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type={passwordInputType}
                    placeholder="************"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="w-full md:w-1/2">
                  <label className="relative inline-flex items-center">
                    <input
                      className="form-checkbox appearance-none"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMe}
                    />
                    {rememberMe ? (
                      <FaCheckSquare className="ml-1 text-black" />
                    ):
                    (
                      <FaSquare
                        className="ml-1"
                        style={{ border: '2px solid black', color: 'white' }}
                      />
                    ) }
                    <span className="ml-2 text-coolGray-800">Remember Me</span>
                  </label>
                </div>
              </div>
              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Sign In
              </button>
              <p className="text-center">
        <span className="text-xs font-medium">
          Don’t have an account?
        </span>
        <Link to="/register" className="inline-block text-xs font-medium text-blue-500 hover:text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
