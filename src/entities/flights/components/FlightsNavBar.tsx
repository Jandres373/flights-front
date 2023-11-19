"use client";

import { Button } from "@/components/ui/button";
import { resetUserData } from "@/entities/users/store/userSlice";
import { useUserState } from "@/hooks/useStateHooks";
import LS from "@/utils/localeStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

const FlightsNavBar = () => {
  //TODO fix any
  const { user, token }:any = useUserState();
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
    <div className="flex items-center justify-between h-24 shadow-xl px-16 py-5">
      <div className="relative flex items-center gap-5 h-full w-2/4 ">
        <Link href="/">LOGO</Link>
        <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 my-auto"></FaSearch>
        <input
          type="text"
          placeholder="Search flights"
          className="h-full w-full rounded-3xl outline-none shadow-md border-gray-200 px-5 text-xl"
        />
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <h1 className="text-lg font-bold">Departure</h1>
          </li>
          <li>stays</li>
          <li>explore</li>
          <li>
            {user ? (
              <div>
                <Button
                  variant={token !== "" ? "outline" : "default"}
                  className="w-32"
                  type="button"
                  onClick={token !== "" ? logOutUser : logInUser}
                >
                  {token !== "" ? "Log out" : "Log in"}
                </Button>
              </div>
            ) : (
              <img
                src={user.image}
                alt="user avatar"
                width={50}
                height={50}
                className="rounded-full shadow-xl"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlightsNavBar;
