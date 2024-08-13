import { ChangeEvent, useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormCheckoutValues } from "../validacaoCheckout";

type Estado = {
  id: number;
  sigla: string;
  nome: string;
};

type EstadoSelectProps = {
  errors: FieldErrors<FormCheckoutValues>;
  register: UseFormRegister<FormCheckoutValues>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selecaoDesabilitada: boolean;
};

export const EstadoSelect = ({
  errors,
  register,
  onChange,
  selecaoDesabilitada,
}: EstadoSelectProps) => {
  const [estados, setEstados] = useState<Estado[]>([]);

  useEffect(() => {
    const pegarEstados = async () => {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
      );
      const data = (await response.json()) as Estado[];

      setEstados(data);
    };

    pegarEstados();
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <label className="font-sans text-sm font-normal" htmlFor="estado">
        Estado
      </label>
      <select
        id="estado"
        className="rounded-md border border-[#CBD5E1] bg-transparent p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
        {...register("estado")}
        onChange={onChange}
      >
        <option value="" disabled={selecaoDesabilitada}>
          Selecione um estado
        </option>
        {estados.map((estado) => {
          return (
            <option
              key={estado.sigla}
              value={estado.sigla}
              disabled={selecaoDesabilitada}
            >
              {estado.nome}
            </option>
          );
        })}
      </select>
      {errors["estado"] && (
        <span className="text-xs text-destructive">
          {errors["estado"].message}
        </span>
      )}
    </div>
  );
};
