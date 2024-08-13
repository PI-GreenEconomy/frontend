import { ArrowRightIcon } from "lucide-react";
import {
  calcularValorTotalProduto,
  formatarMoeda,
  verificaFreteGratuito,
} from "../../../utils/preco";
import { useCart } from "../../../hooks/useCart";

export const CardPedido = () => {
  const { produtos, subtotal, totalDescontos, precoTotal } = useCart();

  const freteGratuito = verificaFreteGratuito(precoTotal);
  const valorTransportadora = 24.84;
  const frete = freteGratuito ? "Grátis" : formatarMoeda(valorTransportadora);

  const precoTotalComFrete = freteGratuito
    ? precoTotal
    : precoTotal + valorTransportadora;

  return (
    <section className="w-full rounded border border-border bg-white px-4 py-5 lg:sticky lg:top-10 lg:flex-[35]">
      <h4 className="mb-5 text-lg font-medium">Conclua seu pedido</h4>

      <div className="flex flex-col gap-4">
        {produtos.map((produto) => {
          const precoAtual = calcularValorTotalProduto(produto);

          return (
            <div key={produto.id} className="flex items-center  gap-4">
              <img
                src={produto.foto}
                alt={produto.nome}
                className="size-16 rounded-sm object-cover"
              />
              <div className="text-sm">
                <p className="mb-1 max-w-[30ch] truncate sm:max-w-full">
                  {produto.nome}
                </p>
                <div>
                  <span className="mr-1 inline-block text-[#575757]">
                    {produto.quantidade}x
                  </span>
                  <span className="font-semibold text-[#042419]">
                    {formatarMoeda(precoAtual)}
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
        {}
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm text-[#575757]">Frete</span>
          <span
            className={`w-32 text-sm font-medium ${freteGratuito && "text-primary"}`}
          >
            {frete}
          </span>
        </div>
        {totalDescontos > 0 && (
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-[#575757]">Desconto</span>
            <span className="w-32 text-sm font-medium text-destructive">
              - {formatarMoeda(totalDescontos)}
            </span>
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
