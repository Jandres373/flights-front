"use client";

import { RootState } from "@/store/store";
import { notFound } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const UserDisplay = ({ children }: any) => {
  //TODO arreglar componente
/*   const {token} = useSelector<RootState>((state: any) => state.userState);


  if (!token) {
    notFound();
  }
 */
  return <div>{children}</div>;
};

export default UserDisplay;
