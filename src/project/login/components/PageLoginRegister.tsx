"use client";

import React from "react";
import Login from "./Login";
import Register from "./Register";
import LoginContent from "./LoginContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/project/_general/store/store";
import { useForm } from "react-hook-form";
import { Params, apiConnection } from "@/api/usersCrud";
import { BASE_URL } from "@/api/baseUrl";
import LS from "@/utils/localeStorage";
import { setUserData } from "@/project/users/store/userSlice";
import { redirect } from "next/navigation";
import { setJustRegistered, setLogin, setRegister } from "../store/loginSlice";
import Alert from "@/project/_general/components/Alert";
const PageLoginRegister = () => {
  // style component
  const token = useSelector<RootState>((state) => state.userState.token);
  const loginStatus = useSelector<RootState>((state)=>state.loginState.justRegistered)

  if (token) {
    redirect("/");
  }

  const activePage = useSelector<RootState>(
    (state) => state.loginState.activePage
  );

  //TODO crear una instancia nueva del control para el formulario si se decide pasar controlers.
  const loginControl = useForm();
  const registerControl = useForm();

  const dispatch = useDispatch();

  const onLoginSubmit = async (data: any) => {
    const params: Params = {
      BASE_URL,
      PATH: "/login",
    };
    const response = await apiConnection.post(params, data);
    const userInfo = response.data;
    LS.set("user", userInfo);
    dispatch(setUserData(userInfo));
  };

  const onRegisterSubmit = async (data: any) => {
    const params: Params = {
      BASE_URL,
      PATH: "/users",
    };
    const registerData = {
      ...data,
      isVerified: false,
      frontBaseUrl: "https://flights-front-jandres373.vercel.app",
    };
    const response = await apiConnection.post(params, registerData);
    dispatch(setLogin())
    dispatch(setJustRegistered(true))

  };

  const switchToRegister = () => {
    dispatch(setRegister());
  };

  const switchToLogin = () => {
    dispatch(setLogin());
  };

  return (
    <div className="h-screen">
      <div className="bg-blue-500 h-full md:h-1/2 ">
        <div className="relative p-5 flex justify-center md:justify-end">
          <section className="absolute bg-blue-500 "></section>
          <div className="hidden md:block w-full">
            <p className="mb-10"> LOGO </p>
            <div className="flex justify-center items-center">
              <LoginContent />
            </div>
          </div>
          {activePage === "login" ? (
            <Login onSubmit={onLoginSubmit} switchPage={switchToRegister} />
          ) : (
            <Register onSubmit={onRegisterSubmit} switchPage={switchToLogin} />
          )}
          {/* <Register> </Register> */}
        </div>
      </div>
      <Alert content={'👋 Great!, check your email and then log in!'} loginStatus={loginStatus as boolean}> </Alert>
    </div>
  );
};

export default PageLoginRegister;
