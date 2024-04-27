import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import event from "../assets/images/bg.png";
import googlepic from "../assets/icons/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      
      console.log("Logged in successfully with Google:", userCredential.user);
      // Redirect to another component after successful login
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // createUserWithEmailAndPassword;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in successfully:", userCredential.user);
      // Redirect to another component after successful login
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative h-screen">
      <img
        src={event}
        alt=""
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <form onSubmit={handleLogin} className="w-96 bg-white p-8 rounded-lg">
          <h1 className="font-bold text-3xl mb-4">Welcome Back</h1>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full py-2.5 px-1 text-sm text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#BB6C2C]"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full py-2.5 px-1 mt-2 text-sm text-gray-700 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#BB6C2C]"
          />
          {error && <p className="text-red-500">{error}</p>}
          <div
            onClick={handleGoogleSignIn}
            className="mt-4 cursor-pointer flex border-2 p-2 rounded-lg justify-center"
          >
            <img src={googlepic} alt="" className="w-4 mr-2" />
            <p>Log in with Google account</p>
          </div>
          <button
            type="submit"
            className="bg-[#BB6C2C] text-white py-2 px-4 mt-4 rounded-md justify-end"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
