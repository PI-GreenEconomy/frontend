/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type TipoId = "nome" | "usuario" | "foto" | "senha" | "confirmarSenha";

interface InputFieldProps {
  id: TipoId;
  type: string;
  placeholder: string;
  label: string;
  register: any;
  errors: any;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  label,
  register,
  errors,
}) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        className={`text-sm font-medium ${id !== "foto" && "after:ml-1 after:text-destructive after:content-['*'] "} sm:text-base`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
        {...register(id)}
      />
      {errors[id] && (
        <span className="text-xs text-destructive">{errors[id].message}</span>
      )}
    </div>
  );
};

export default InputField;
