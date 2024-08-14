// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCXts2L5eT6nlpa7dN6XkTRx2OWFiclkLY",
  authDomain: "loginform-19b26.firebaseapp.com",
  projectId: "loginform-19b26",
  storageBucket: "loginform-19b26.appspot.com",
  messagingSenderId: "945165599071",
  appId: "1:945165599071:web:ebad8ca335fbfc562ff6ea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!email) {
      setEmailError("Please enter your email");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      isValid = false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Redirect to login page after successful signup
        navigate("/login");
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        window.location.href = "https://dev.konfhub.com/";
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result) {
        window.location.href = "https://dev.konfhub.com/";
      }
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
    }
  };

  const handleAmazonSignIn = async () => {
    try {
      const provider = new OAuthProvider("amazon.com");
      const result = await signInWithPopup(auth, provider);
      if (result) {
        window.location.href = "https://dev.konfhub.com/";
      }
    } catch (error) {
      console.error("Error signing in with Amazon:", error);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setEmailError("Please enter your email to reset password");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen min-w-fit bg-[#FFDBA6] items-center justify-center relative">
      <img
        src="https://dev-accounts.konfhub.com/static/media/Top_left.b266859f.svg"
        alt="Top Left Decoration"
        className="absolute top-0 left-0 w-48 h-48"
      />
      <img
        src="https://dev-accounts.konfhub.com/static/media/Bottom_left_most.5f20085c.svg"
        alt="Bottom Left Decoration"
        className="absolute bottom-0 left-0 w-48 h-48"
      />
      <div className="flex w-full max-w-5xl relative">
        <div className="w-1/2 flex items-center justify-center relative">
          <img
            src="https://dev-accounts.konfhub.com/static/media/Logo.3a3466f7.svg"
            alt="Octopus"
            className="w-3/4"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="https://dev-accounts.konfhub.com/static/media/Top_middle.a4f4c572.svg"
            alt="Top Middle Background"
            className="absolute top-1 rounded-lg opacity-30"
          />
          <div
            className="bg-white rounded-lg p-7 flex flex-col"
            style={{ width: "85%", minHeight: "505px", maxHeight: "auto" }}
          >
            <h2 className="text-3xl font-bold text-[#572148] mb-6 text-center font-Caveat Brush'">
              Sign Up
            </h2>
            <form onSubmit={handleSignup} className="flex-1 flex flex-col">
              <div className="mb-4">
                <label className="text-[#572148]">Email</label>
                <div className="flex items-center border-b border-gray-300">
                  <input
                    type="email"
                    className="w-full p-2 focus:outline-none"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="text-[#572148]">Password</label>
                <div className="flex items-center border-b border-gray-300">
                  <input
                    type="password"
                    className="w-full p-2 focus:outline-none"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="text-[#572148]">Confirm Password</label>
                <div className="flex items-center border-b border-gray-300">
                  <input
                    type="password"
                    className="w-full p-2 focus:outline-none"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {confirmPasswordError && (
                  <p className="text-red-500 text-xs mt-1">
                    {confirmPasswordError}
                  </p>
                )}
              </div>

              <div className="flex justify-end mb-6">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-[#553076] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#572148] text-white py-2 rounded-md font-semibold hover:bg-opacity-90 transition duration-200"
              >
                Sign Up
              </button>
            </form>
            <div className="my-4 text-center">
              <span className="text-sm text-gray-500">OR</span>
            </div>
            <button className="w-full bg-white text-[#572148] border border-[#572148] py-2 rounded-md font-semibold hover:bg-gray-50 transition duration-200">
              Request OTP
            </button>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={handleGoogleSignIn}
                className="p-2 bg-white rounded-full"
              >
                <img
                  src="https://dev-accounts.konfhub.com/google.svg"
                  alt="Google"
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="p-2 bg-white rounded-full"
              >
                <img
                  src="https://dev-accounts.konfhub.com/Facebook.svg"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={handleAmazonSignIn}
                className="p-2 bg-white rounded-full"
              >
                <img
                  src="https://dev-accounts.konfhub.com/amazon.svg"
                  alt="Amazon"
                  className="w-8 h-8"
                />
              </button>
            </div>
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">
                Already have an account?{" "}
              </span>
              <a
                href="/login"
                className="text-sm text-[#FF6B6B] font-semibold hover:underline"
              >
                Signin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
