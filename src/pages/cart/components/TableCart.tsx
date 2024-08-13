import {
  calcularValorTotalProduto,
  formatarMoeda,
  verificaDesconto,
} from "../../../utils/preco";
import { useCart } from "../../../hooks/useCart";
import { useState } from "react";
import { Icon } from "../../../components/icons";
import { BotaoQuantidade } from "../../../components/BotaoQuantidade";

export default function TableCart() {
  const { produtos, removerProdutoDoCarrinho } = useCart();
  const [_, setQuantidade] = useState(1);

  return (
    <section className="w-full">
      <div className="relative flex w-full min-w-0 flex-col break-words rounded">
        <div className="block w-full overflow-x-auto">
          <table className="w-full border-collapse items-center bg-transparent ">
            <thead className="border-b border-t border-b-[#B3D0C6] border-t-[#B3D0C6] bg-[#E7F0ED]">
              <tr>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-[#4A695E]">
                  PRODUTOS
                </th>
                <th></th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-[#4A695E]">
                  PREÇO
                </th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-[#4A695E]">
                  QUANTIDADE
                </th>
                <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-[#4A695E]">
                  Subtotal
                </th>
              </tr>
            </thead>

            {produtos.map((produto) => {
              const precoAtual = calcularValorTotalProduto(produto);
              const existeDesconto = verificaDesconto(
                produto.porcentagemDesconto,
              );

              const subtotalProduto = precoAtual * produto.quantidade;

              return (
                <tbody key={produto.id}>
                  <tr>
                    <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-base font-medium text-[#042419]">
                      <div className="flex  items-center gap-3">
                        <button
                          className="group"
                          onClick={() => removerProdutoDoCarrinho(produto.id)}
                        >
                          <Icon.CartClose className="size-6 stroke-[#94A3B8] group-hover:stroke-destructive group-focus-visible:stroke-destructive" />
                        </button>
                        <img
                          src={produto.foto}
                          className="size-[72px] rounded-sm object-cover"
                          alt=""
                        />
                        <p className="w-[160px]  text-wrap text-base  font-medium text-foreground">
                          {produto.nome}
                        </p>
                      </div>
                    </td>
                    <td></td>
                    <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-base font-medium text-[#042419]">
                      {formatarMoeda(precoAtual)}
                      {existeDesconto && (
                        <del className="ml-1 inline-block text-xs text-[#575757]">
                          {formatarMoeda(produto.basePreco)}
                        </del>
                      )}
                    </td>
                    <td className="align-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-xs">
                      <div className="w-fit">
                        <BotaoQuantidade
                          quantidade={produto.quantidade}
                          setQuantidade={setQuantidade}
                          produtoId={produto.id}
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-base font-medium text-[#042419]">
                      <span className="inline-block w-32">
                        {formatarMoeda(subtotalProduto)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
}
