"use client";

import { Params, apiConnection } from "@/api/usersCrud";
import { redirect, useRouter, useParams } from "next/navigation";
import React from "react";
import { BASE_URL } from "../../../../api/baseUrl";
import Button from "@/project/_general/components/Button";

const Verify = () => {
  const router = useRouter()
  const params = useParams();

  const validateAcc = async () => {
    const code = params.slug;
    const URL: Params = {
      BASE_URL,
      PATH: `/users/verify/${code}`,
    };
    const response = await apiConnection.get(URL);
    if (response) {
      router.push("/login");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button onClick={validateAcc} variant="error" type="button" className="">
        Verify
      </Button>
    </div>
  );
};

export default Verify;
