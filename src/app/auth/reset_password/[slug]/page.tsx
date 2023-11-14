"use client";

import { Params, apiConnection } from "@/api/usersCrud";
import Button from "@/project/_general/components/Button";
import Form from "@/project/_general/components/Form";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { BASE_URL } from "@/api/baseUrl";

const ResetPasswordCode = () => {
  const {slug} = useParams();
  const router = useRouter()

  const onSubmit = (data: any) => {
    const {password,confirm} = data;
    if (password===confirm) {
      const URL: Params ={
        BASE_URL,
        PATH: `/users/reset_password/${slug}`
      }
      apiConnection.post(URL,data)
    } else {
      console.error('los datos no son iguales')
    }
    router.push('/login')
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <Form
          arrNum={2}
          style="primary"
          names={["password", "confirm"]}
          arrInputTypes={["password", "password"]}
          arrLabels={["password", "confirm"]}
          onSubmit={onSubmit}
          arrPlaceHolders={["new password", "confirm password"]}
        >
          <Button variant="success" type="submit" className="">
            Change password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordCode;
