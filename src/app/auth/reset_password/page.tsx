'use client'

import { Params, apiConnection } from "@/api/usersCrud";
import Form from "@/project/_general/components/Form";
import React from "react";
import { BASE_URL } from '../../../api/baseUrl';
import Button from "@/project/_general/components/Button";

const ResetPassword = () => {

  const onSubmit = (data:any) => {
    const URL: Params = {
      BASE_URL,
      PATH: "/users/reset_password"
    }
    apiConnection.post(URL, {...data, frontBaseUrl:"http://localhost:3000"});
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Form
        arrNum={1}
        names={["email"]}
        arrInputTypes={["text"]}
        arrLabels={["email"]}
        arrPlaceHolders={["emial"]}
        style="primary"
        onSubmit={onSubmit}
      >
        <Button variant="success" className="" type="submit">Confirm email</Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
