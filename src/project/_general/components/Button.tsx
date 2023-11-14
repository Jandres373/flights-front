import React, { ReactNode } from 'react'

type Variant = keyof typeof variants

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps{
  onClick?: any;
  variant: Variant;
  className: string;
  type: ButtonType;
  logo?:React.ReactNode; 
  children: ReactNode;
}

const buttonBaseClassAttributes = "py-2 px-4 rounded-md focus:outline-none focus:shadow-outline";
const variants = {
  base: buttonBaseClassAttributes,
  primary: `${buttonBaseClassAttributes} bg-blue-500 text-white hover:bg-blue-700`,
  secondary: `${buttonBaseClassAttributes} bg-gray-300 text-gray-700 hover:bg-gray-400`,
  primaryDark: `${buttonBaseClassAttributes} bg-blue-700 text-white hover:bg-blue-900`,
  secondaryDark: `${buttonBaseClassAttributes} bg-gray-600 text-white hover:bg-gray-800`,
  error: `${buttonBaseClassAttributes} bg-red-500 text-white hover:bg-red-700`,
  success: `${buttonBaseClassAttributes} bg-green-500 text-white hover:bg-green-700`,
  warning: `${buttonBaseClassAttributes} bg-yellow-500 text-white hover:bg-yellow-700`,
  info: `${buttonBaseClassAttributes} bg-teal-500 text-white hover:bg-teal-700`,
};

const Button = ({onClick=null, variant, className, type, logo, children}:ButtonProps) => {
  return (
    <>
    <button onClick={onClick} type={type} className={`${className} ${variants[variant]} flex justify-center items-center gap-2`}> {logo} {children}</button>
    </>
  )
}

export default Button