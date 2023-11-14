"use client";

import { RootState } from "@/project/_general/store/store";
import { notFound } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const UserDisplay = ({ children }: any) => {
  const token = useSelector<RootState>((state: any) => state.userState.token);

  if (!token) {
    notFound();
  }

  return <div>{children}</div>;
};

export default UserDisplay;
