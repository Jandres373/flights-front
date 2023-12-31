import { Button } from "@/components/ui/button";
import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const LoginOptions = ({ children }: any) => {
  return (
    <div className="flex gap-2">
      <Button type="button" variant="default" className="h-16">
        <FaGoogle />
        sign in with google
      </Button>
      <Button type="button" variant="secondary" className=" h-16">
        <FaGithub />
         
      </Button>
      <Button type="button" variant="secondary" className="text-blue-800 h-16">
        <FaFacebook />
         
      </Button>
      {children}
    </div>
  );
};

export default LoginOptions;
