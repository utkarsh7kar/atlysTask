import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, username, password };
    // Assuming successful registration, log the user in
    loginUser(userData);
    navigate("/main-feed");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-4 text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full   
 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
