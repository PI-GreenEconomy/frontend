import { Link } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import useFrete from "../../hooks/useFrete";
import { formataCep, ICep, pegarDadosCep, validaCep } from "../../utils/cep";
import { useState } from "react";
import { MapPinIcon } from "lucide-react";
import { calcularIntervaloEntrega } from "../../utils/formataDataEntrega";
import { formatarMoeda } from "../../utils/preco";

const formCepSchema = z.object({
  cepOrigem: z
    .string()
    .regex(/^\d{5}-\d{3}$|^\d{8}$/, { message: "CEP inválido" })
    .transform(formataCep),
});

type FormCepValues = z.infer<typeof formCepSchema>;

interface CalculaCepProps {
  precoProduto: number;
  titulo?: string;
}

export const CalculaCep = ({ precoProduto, titulo }: CalculaCepProps) => {
  const { calcularFrete, resultadoFrete, setResultadoFrete, error } =
    useFrete();
  const [cep, setCep] = useState<ICep | null>(null);

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormCepValues>({
    resolver: zodResolver(formCepSchema),
    defaultValues: {
      cepOrigem: "",
    },
  });

  const onSubmit: SubmitHandler<FormCepValues> = async (data) => {
    const { cepOrigem } = data;
    const isValid = await validaCep(cepOrigem);

    if (isValid) {
      clearErrors("cepOrigem");
      await pegarDadosCep(cepOrigem, setCep);
      await calcularFrete(data);
    } else {
      setCep(null);
      setResultadoFrete(null);
      setError("cepOrigem", {
        type: "manual",
        message: "CEP inválido. Verifique e tente novamente.",
      });
    }
  };

  return (
    <div className="bg-green-50 pb-2 pt-4">
      <div className="relative flex w-full flex-wrap items-center justify-between gap-6 px-4">
        {titulo && <p className="text-lg font-medium lg:flex-1">{titulo}</p>}

        <div className="flex w-full flex-col gap-2 lg:flex-[2]">
          <form
            className="relative order-1 flex w-full  flex-wrap rounded-xl text-foreground lg:order-none"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="cepOrigem"
              control={control}
              render={({ field }) => (
                <PatternFormat
                  format="#####-###"
                  mask="_"
                  placeholder="Digite o CEP"
                  className="w-full  rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
                  onValueChange={(values) => field.onChange(values.value)}
                  value={field.value}
                />
              )}
            />
            {errors.cepOrigem && (
              <span className="text-xs text-destructive">
                {errors.cepOrigem.message}
              </span>
            )}
            <button
              type="submit"
              className="1 absolute right-0 flex-1 rounded bg-[#157554] px-5 py-2 uppercase text-white hover:bg-primary/90 focus:bg-primary/90"
            >
              Calcular
            </button>
          </form>
        </div>
      </div>

      <div className="mt-2 flex w-full justify-end px-4">
        <Link
          target="_blank"
          to="https://buscacepinter.correios.com.br/app/endereco/index.php"
          className="inline-block w-fit text-sm text-primary/90 underline hover:text-primary focus-visible:text-primary"
        >
          Não sei meu CEP
        </Link>
      </div>

      {!error && cep && resultadoFrete?.length && (
        <div className="mt-4 border-t border-t-green-200 py-4">
          <div className="flex items-center gap-2 px-4 text-green-800">
            <MapPinIcon />
            <span>
              {cep.logradouro}, {cep.bairro} - {cep.localidade} - {cep.uf}
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4  bg-white px-4 py-4">
            {resultadoFrete.map(
              (resultado) =>
                resultado.delivery_range.max && (
                  <div key={resultado.id}>
                    <div className="flex w-full flex-wrap items-center justify-between gap-2">
                      <img
                        width={85}
                        height={85}
                        src={resultado.company.picture}
                        alt={resultado.company.name}
                      />
                      {precoProduto >= 100 ? (
                        <p className="text-sm font-medium text-primary">
                          Frete grátis
                        </p>
                      ) : (
                        <p>{formatarMoeda(+resultado.price)}</p>
                      )}
                      <span className="w-52 text-sm">
                        até{" "}
                        {calcularIntervaloEntrega(resultado.delivery_range.max)}
                      </span>
                    </div>
                    <div className="mt-4 border-t border-t-primary/20 "></div>
                  </div>
                ),
            )}
          </div>
        </div>
      )}
      {error && (
        <span className="block max-w-96 px-4 text-sm font-medium text-destructive">
          Não entregamos no CEP informado. Por favor, verifique o CEP ou entre
          em contato com o suporte.
        </span>
      )}
    </div>
  );
};
