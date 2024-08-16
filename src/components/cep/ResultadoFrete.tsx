import { MapPinIcon } from "lucide-react";
import useFrete from "../../hooks/useFrete";
import { formatarMoeda } from "../../utils/preco";
import { calcularIntervaloEntrega } from "../../utils/formataDataEntrega";
import { VALOR_FRETE_GRATIS } from "../../utils/frete";

interface ResultadoFreteProps {
  precoProduto: number;
  selecaoAtivada?: boolean;
}

export const ResultadoFrete = ({
  precoProduto,
  selecaoAtivada,
}: ResultadoFreteProps) => {
  const {
    cep,
    resultadoFrete,
    indexFreteSelecionado,
    setIndexFreteSelecionado,
  } = useFrete();

  return (
    <div
      className={`${selecaoAtivada ? "" : "mt-4 border-t border-t-green-200 py-4"}`}
    >
      {!selecaoAtivada && (
        <div className="flex items-center gap-2 px-4 text-green-800">
          <MapPinIcon />
          <span>
            {cep?.logradouro}, {cep?.bairro} - {cep?.localidade} - {cep?.uf}
          </span>
        </div>
      )}

      <div
        className={`mt-4  flex flex-col gap-4 bg-white  px-4 ${selecaoAtivada ? "" : "py-4"}`}
      >
        {resultadoFrete?.map(
          (resultado) =>
            resultado.delivery_range &&
            resultado.delivery_range.max && (
              <div key={resultado.id}>
                <label
                  className={`mt-2 flex w-full flex-wrap items-center justify-between gap-3 rounded border border-transparent px-1 py-4 ${selecaoAtivada && indexFreteSelecionado === +resultado.id && "border-green-400 bg-green-100"}`}
                >
                  <div className="flex items-center gap-2">
                    {selecaoAtivada && (
                      <input
                        type="radio"
                        name="resultadoFrete"
                        className="size-3"
                        checked={indexFreteSelecionado === +resultado.id}
                        value={resultado.id}
                        onChange={({ target }) =>
                          setIndexFreteSelecionado(+target.value)
                        }
                      />
                    )}
                    <img
                      width={85}
                      height={85}
                      src={resultado.company.picture}
                      alt={resultado.company.name}
                    />
                  </div>

                  {precoProduto >= VALOR_FRETE_GRATIS ? (
                    <p className="text-sm font-medium text-primary">Grátis</p>
                  ) : (
                    <p className="text-sm">{formatarMoeda(+resultado.price)}</p>
                  )}
                  <span className="w-52 text-sm">
                    até {calcularIntervaloEntrega(resultado.delivery_range.max)}
                  </span>
                </label>
                <div className="mt-4 border-t border-t-primary/20"></div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};
