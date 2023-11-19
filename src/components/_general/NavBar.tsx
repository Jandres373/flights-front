"use client";

import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LS from "@/utils/localeStorage";
import { useRouter } from "next/navigation";
import { resetUserData } from "@/entities/users/store/userSlice";
import { Button } from "../ui/button";

const NavBar = () => {
  const token = useSelector<RootState>((state) => state.userState.token);
  const dispatch = useDispatch();
  const router = useRouter();

  const logOutUser = () => {
    LS.remove("user");
    dispatch(resetUserData());
    router.push("/login");
  };

  const logInUser = () => {
    router.push("/login");
  };

  return (
    <div className="w-full h-16 px-14 flex justify-between items-center shadow-xl">
      <section className="basis">
        <Link href="/">LOGO</Link>
      </section>
      <section className="basis-0 gap-5 flex justify-center items-center">
        <p className="block md:hidden">menu</p>
        <ul className="hidden md:flex gap-5 justify-center items-center">
          <li>explore</li>
          <li>flights</li>
          <li>maps</li>
        </ul>
        <Button
          variant={token !== "" ? "outline" : "default"}
          className="w-32"
          type="button"
          onClick={token !== "" ? logOutUser : logInUser}
        >
          {token !== "" ? "Log out" : "Log in"}
        </Button>
      </section>
    </div>
  );
};

export default NavBar;
