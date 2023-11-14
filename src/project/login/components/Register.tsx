import React from "react";
import Button from "@/project/_general/components/Button";
import Form from "../../_general/components/Form";
import Header from "./Header";
import { FaBeer } from "react-icons/fa";

const Register = ({ onSubmit, switchPage }: any) => {
  return (
    <div className="bg-white rounded-3xl w-full h-screen md:w-[700px] shadow-xl p-5 flex flex-col justify-around">
      {/* info generica de la pestaña de login */}
      <Header
        openning="Already have an account?"
        invite="Go to"
        content="Sign up"
        actionElement="Login"
        action={switchPage}
      ></Header>

      {/* Formulario de registro */}
      <Form
        /* control={control} */
        onSubmit={onSubmit}
        arrNum={6}
        names={[
          "email",
          "password",
          "firstName",
          "lastName",
          "country",
          "image",
        ]}
        arrLabels={[
          "email",
          "password",
          "first name",
          "last name",
          "country",
          "image URL",
        ]}
        arrInputTypes={["email", "password", "text", "text", "country", "text"]}
        arrPlaceHolders={[
          "email",
          "password",
          "first name",
          "last name",
          "country",
          "image URL",
        ]}
        style="primary"
      >
        {
          /* Boton de accion dentro del Form */
          <Button type="submit" variant="primary" className={"w-full h-16"}>
            <FaBeer className="text-2xl" />
            <p>Register</p>
          </Button>
        }{" "}
      </Form>
    </div>
  );
};

export default Register;
