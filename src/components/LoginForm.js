import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user?.email && password === user?.password) {
      navigate("/main-feed");
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-md">
      <div className="text=center">
      <h3 className="text-m text-gray-400 mb-4 text-center">Welcome Back</h3>
      <h2 className="text-lg text-white font-bold mb-4 text-center">Log into your account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email or Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/forgot-password" className="text-blue-500 text-sm ml-2">
            Forgot password?
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login now
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Not registered yet?{" "}
          <a href="/register" className="text-blue-500">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
