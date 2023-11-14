"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";

const formStyles = {
  base: "py-4 px-6 rounded-xl border-2 border-gray ",
  primary: "text-black ",
  secondary: " text-gray-700 ",
};

type Stiles = keyof typeof formStyles;

interface FormProps {
  onSubmit: any;

  style?: Stiles;
  arrNum: number;
  names: string[];
  arrLabels: string[];
  arrInputTypes: string[];
  arrPlaceHolders: string[];
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  style,
  names,
  arrNum,
  arrLabels,
  arrInputTypes,
  arrPlaceHolders,
  children,
}) => {

  const { handleSubmit, control, formState: { errors } } = useForm();

  const inputRender = (field: any, i: number) => (
    <input
      {...field}
      name={arrLabels[i]}
      title={arrLabels[i]}
      type={arrInputTypes[i]}
      placeholder={arrPlaceHolders[i]}
      className={`${formStyles.base} ${style && formStyles[style]} my-5`}
    />
  );

  return (
    <div>
      <form className={`grid grid-cols-2 gap-5`} onSubmit={handleSubmit(onSubmit)} >
        {Array.from({ length: arrNum }).map((_, i) => (
          <div key={i} className={`flex flex-col`}>
            <label htmlFor={arrLabels[i]}>{arrLabels[i]}</label>
            <Controller
              name={names[i]}
              control={control}
              render={({ field }) => inputRender(field, i)}
              rules={{ required: true }}
              defaultValue={""}
            />
            {errors[arrLabels[i]] && <span className="text-red-500">Este campo es requerido</span>}
          </div>
        ))}
        <div className="col-span-2 mt-5">
          {children}
          {/* El botón se coloca en una columna aparte ocupando todo el ancho disponible */}
        </div>
      </form>
    </div>
  );
};

export default Form;
