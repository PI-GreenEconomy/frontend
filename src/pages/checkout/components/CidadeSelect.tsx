import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormCheckoutValues } from "../validacaoCheckout";

type Cidade = {
  id: string;
  nome: string;
};

type CidadeSelectProps = {
  cidades: Cidade[];
  errors: FieldErrors<FormCheckoutValues>;
  register: UseFormRegister<FormCheckoutValues>;
  selecaoDesabilitada: boolean;
  cidadeAtual: string;
};

export const CidadeSelect = ({
  errors,
  register,
  cidades,
  selecaoDesabilitada,
  cidadeAtual,
}: CidadeSelectProps) => {
  const cidadeDesabilitada = !(cidades.length > 0);

  return (
    <div className="flex flex-col gap-1">
      <label className="font-sans text-sm font-normal" htmlFor="cidade">
        Cidade
      </label>
      <select
        id="cidade"
        className="rounded-md border border-[#CBD5E1] bg-transparent p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
        {...register("cidade")}
        disabled={cidadeDesabilitada || selecaoDesabilitada}
      >
        {cidadeDesabilitada && !cidadeAtual && (
          <option value="">Selecione um estado primeiro</option>
        )}
        {!cidadeDesabilitada && cidadeAtual && (
          <option value={cidadeAtual}>{cidadeAtual}</option>
        )}

        {cidades.map((cidade) => {
          return (
            <option key={cidade.id} value={cidade.nome}>
              {cidade.nome}
            </option>
          );
        })}
      </select>
      {errors["cidade"] && (
        <span className="text-xs text-destructive">
          {errors["cidade"].message}
        </span>
      )}
    </div>
  );
};
