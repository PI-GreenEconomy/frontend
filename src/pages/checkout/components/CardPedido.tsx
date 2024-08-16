import { ArrowRightIcon } from "lucide-react";
import {
  calcularValorTotalProduto,
  formatarMoeda,
  verificaDesconto,
} from "../../../utils/preco";
import { useCart } from "../../../hooks/useCart";
import {
  calculaTotalComFrete,
  exibeFrete,
  formataValorTransportadora,
  selecionaFrete,
} from "../../../utils/frete";
import useFrete from "../../../hooks/useFrete";

interface CardPedidoProps {
  precoTotal: number;
  freteGratuito: boolean;
  valorTransportadora: number;
}

export const CardPedido = ({
  precoTotal,
  freteGratuito,
  valorTransportadora,
}: CardPedidoProps) => {
  const { produtos, subtotal, totalDescontos } = useCart();
  const { cep, resultadoFrete, indexFreteSelecionado } = useFrete();

  const freteSelecionado = selecionaFrete(
    resultadoFrete,
    indexFreteSelecionado,
  );

  const valorTransportadoraFormatado = formataValorTransportadora(
    resultadoFrete,
    freteSelecionado,
    precoTotal,
  );

  const frete = exibeFrete(precoTotal, valorTransportadoraFormatado);

  const precoTotalComFrete = calculaTotalComFrete(
    precoTotal,
    valorTransportadora,
  );

  return (
    <section className="w-full rounded border border-border bg-white px-4 py-5 lg:min-w-[29.75rem] lg:flex-[35]">
      <h4 className="mb-5 text-lg font-medium">Conclua seu pedido</h4>

      <div className="flex max-h-[320px] flex-col gap-4 overflow-y-auto overflow-x-hidden">
        {produtos.map((produto) => {
          const precoAtual = calcularValorTotalProduto(produto);
          const existeDesconto = verificaDesconto(produto.porcentagemDesconto);

          return (
            <div key={produto.id} className="flex items-center  gap-4">
              <img
                src={produto.foto}
                alt={produto.nome}
                className="size-16 rounded-sm object-cover"
              />
              <div className="text-sm">
                <p className="mb-1 max-w-[30ch] truncate md:max-w-[40ch]">
                  {produto.nome}
                </p>
                <div>
                  <span className="mr-1 inline-block text-[#575757]">
                    {produto.quantidade}x
                  </span>
                  <span className="font-semibold text-[#042419]">
                    {formatarMoeda(precoAtual)}
                    {existeDesconto && (
                      <del className="ml-1 inline-block text-xs font-normal text-[#575757]">
                        {formatarMoeda(produto.basePreco)}
                      </del>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm text-[#575757]">Subtotal</span>
          <span className="w-32 text-sm font-medium">
            {formatarMoeda(subtotal)}
          </span>
        </div>
        {cep && resultadoFrete && (
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-[#575757]">Frete</span>
            <span
              className={`w-32 text-sm font-medium ${freteGratuito && "text-primary"}`}
            >
              {frete}
            </span>
          </div>
        )}
        {totalDescontos > 0 && (
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-[#575757]">Desconto</span>
            <div className="w-32 text-sm font-medium text-destructive ">
              <span className="-ml-2">-</span> {formatarMoeda(totalDescontos)}
            </div>
          </div>
        )}
      </div>
      <div className="my-4 border-t border-t-border"></div>
      <div className="mb-6 flex items-center justify-between gap-2">
        <span className="text-base">Total</span>
        <span className="w-32 text-base font-bold">
          {formatarMoeda(precoTotalComFrete)}
        </span>
      </div>
      <button className="flex w-full items-center justify-center gap-3 rounded bg-[#0A6847] px-8 py-4 font-medium uppercase text-white transition-colors hover:bg-primary focus-visible:bg-primary lg:text-base">
        Efetuar Pagamento
        <ArrowRightIcon className="size- flex-shrink-0" />
      </button>
    </section>
  );
};
