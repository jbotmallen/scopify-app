"use client";

import { Button } from "@/components/ui/button.jsx";
import { UseAuth } from "../../../lib/context/AuthContext.js";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import withOutAuth from "../withOutAuth.js";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");
  const { GoogleSignIn, SignUp } = UseAuth();

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await GoogleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== conPassword) {
      return setError("Passwords do not match!");
    } else {
      try {
        await SignUp(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-2/3 h-full">
      <div className="flex min-h-full w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Register using Email or Google
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => handleSignUp(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {error && <p className="text-xs text-red-400 mt-3">{error}</p>}
            </div>
            <div>
              <Button variant="authentication" type="submit" className="w-full">
                Register
              </Button>
            </div>
          </form>
          <div className="mt-5">
            <Button
              variant="default"
              onClick={handleGoogleSignIn}
              className="flex w-full justify-center items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
            >
              <FcGoogle /> Google
            </Button>
          </div>
          <p className="mt-10 text-center text-sm">
            Already a member?{" "}
            <a
              href="/auth/sign-in"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withOutAuth(page);
