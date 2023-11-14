import React from "react";
import Button from "@/project/_general/components/Button";
import Form from "../../_general/components/Form";
import Header from "./Header";
import LoginOptions from "./LoginOptions";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";


const Login = ({onSubmit,switchPage, resetPasswordFunc}:any) => {

  return (
    <div className="bg-white rounded-3xl w-full h-screen md:w-[700px] shadow-xl p-5 flex flex-col justify-around">
      {/* info generica de la pestaña de login */}
      <Header openning="New here?" invite="Create an" actionElement="Account" content="Sign in" action={switchPage}></Header>

      {/* otras opciones de logueo */}
      <LoginOptions />

      {/* Formulario de registro */}
      <Form
        /* control={control} */
        onSubmit={onSubmit}
        arrNum={2}
        names={["email", "password"]}
        arrLabels={["email", "password"]}
        arrInputTypes={["email", "password"]}
        arrPlaceHolders={["email", "password"]}
        style="primary"
      >
        <Link href={'/auth/reset_password'} className="mb-5 underline text-blue-500 cursor-pointer">Forgot password?</Link>
        {
          /* Boton de accion dentro del Form */
          <Button type="submit" variant="primary" className={"w-full h-16"}>
            <FaBeer className="text-2xl" />
            <p>Login</p>
          </Button>
        }{" "}
      </Form>
    </div>
  );
};

export default Login;
