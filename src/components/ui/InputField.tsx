/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type TipoId =
  | "nome"
  | "usuario"
  | "foto"
  | "senha"
  | "confirmarSenha"
  | "endereco"
  | "cidade"
  | "estado"
  | "cep"
  | "nomeCartao"
  | "numeroCartao"
  | "validadeCartao"
  | "cvvCartao"
  | "informacao";

interface InputFieldProps {
  id: TipoId;
  type: string;
  placeholder?: string;
  label: string;
  register: any;
  errors: any;
  className?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  label,
  register,
  errors,
  className,
  disabled,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        className={
          className
            ? className
            : `text-sm font-medium ${id !== "foto" && "after:ml-1 after:text-destructive after:content-['*'] "} sm:text-base`
        }
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
        disabled={disabled}
        {...register(id)}
      />
      {errors[id] && (
        <span className="text-xs text-destructive">{errors[id].message}</span>
      )}
    </div>
  );
};

export default InputField;
