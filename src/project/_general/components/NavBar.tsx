'use client'

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { resetUserData } from '@/project/users/store/userSlice';
import LS from "@/utils/localeStorage";
import { redirect, useRouter } from "next/navigation";

const NavBar = () => {
  const token = useSelector<RootState>(state=>state.userState.token)
  const dispatch = useDispatch()
  const router = useRouter()

  const logOutUser =() => {
    LS.remove('user')
    dispatch(resetUserData())
    console.log('me ejecuto')
  }

  return (
    <div className="w-full h-16 px-14 flex justify-between items-center bg-blue-500">
      <section className="basis">LOGO</section>
      <section className="basis-0 gap-5 flex justify-center items-center">
        <p className="block md:hidden">menu</p>
        <ul className="hidden md:flex gap-5 justify-center items-center">
          <li>explore</li>
          <li>flights</li>
          <li>maps</li>
        </ul>
        <div>
          <Button variant={token!=="" ? "error" : "success"} className="" type="button" onClick={token!=="" ? logOutUser : null} ><Link href={'/login'}>{token!=="" ? "Log out" : "Login"}</Link></Button>
          
        </div>
      </section>
    </div>
  );
};

export default NavBar;
