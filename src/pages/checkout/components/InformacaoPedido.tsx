import { BanknoteIcon } from "lucide-react";
import {
  calcularValorTotalProduto,
  formatarMoeda,
  verificaDesconto,
} from "../../../utils/preco";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { IMAGES } from "../../../data/imageIcons";
import { Checkout, tiposPagamento } from "../Checkout";

export const InformacaoPedido = ({
  infoCheckout,
}: {
  infoCheckout: Checkout;
}) => {
  const { usuario } = useContext(AuthContext);

  const imagemTipoPagamento = (tipoPagamento: tiposPagamento) => {
    switch (tipoPagamento) {
      case "boleto":
        return IMAGES.Boleto;
      case "cartao":
        return IMAGES.Cartao;
      case "pix":
        return IMAGES.Pix;
    }
  };

  const {
    data,
    tipoPagamento,
    cart,
    frete,
    freteSelecionado,
    subtotal,
    total,
  } = infoCheckout;

  return (
    <div className="mt-10 flex flex-wrap justify-between gap-4 rounded border border-border p-4 md:gap-10">
      {/* INFO PAGAMENTO */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 md:gap-8">
          <div>
            <p className="mb-2 flex flex-wrap gap-2 text-gray-700">
              <BanknoteIcon />
              <span>Pagamento</span>
            </p>
            <div className="rounded border-green-100 bg-green-50 p-2 text-sm text-gray-700">
              <img
                src={imagemTipoPagamento(tipoPagamento)}
                alt={tipoPagamento}
                className="mx-auto"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 flex flex-wrap gap-2 text-gray-700">
              <BanknoteIcon />
              <span>Entrega</span>
            </p>
            <div className="rounded border-green-100 bg-green-50 p-2 text-sm text-gray-700">
              <img
                src={freteSelecionado?.company.picture}
                alt={tipoPagamento}
                className="mx-auto"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 sm:w-fit">
          <p className="flex flex-wrap gap-2 text-gray-700">
            <BanknoteIcon />
            <span>Dados cadastrais</span>
          </p>
          <div className="flex flex-col gap-1 rounded border border-green-100 bg-green-50 p-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">Seu nome:</span> {usuario.nome}
            </p>
            <p>
              <span className="font-medium">Endereço:</span> {data.endereco}
            </p>
            <p>
              <span className="font-medium">Cidade:</span> {data.cidade}
            </p>
            <p>
              <span className="font-medium">CEP:</span> {data.cep}
            </p>
          </div>
        </div>
      </div>
      {/* INFO PRODUTO */}
      <div className="block overflow-auto md:px-2 lg:flex-1 lg:overflow-hidden">
        <table className="w-full border-collapse items-center overflow-auto overflow-x-auto rounded border border-border bg-transparent md:mx-4">
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

          <tbody className="overflow-y-auto">
            {cart.map((produto) => {
              const precoAtual = calcularValorTotalProduto(produto);
              const existeDesconto = verificaDesconto(
                produto.porcentagemDesconto,
              );

              const subtotalProduto = precoAtual * produto.quantidade;

              return (
                <tr key={produto.id}>
                  <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-base font-medium text-[#042419]">
                    <div className="flex  items-center gap-3">
                      <img
                        src={produto.foto}
                        className="size-[64px] rounded-sm object-cover"
                        alt=""
                      />
                      <p className="w-[160px]  text-wrap text-sm font-medium text-foreground">
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
                  <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-base font-medium text-[#042419]">
                    <span className="inline-block w-32">
                      {produto.quantidade}
                    </span>
                  </td>
                  <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-base font-medium text-[#042419]">
                    <span className="inline-block w-32">
                      {formatarMoeda(subtotalProduto)}
                    </span>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td
                colSpan={5}
                className="px-11 pt-1 text-right text-sm text-gray-800 "
              >
                Subtotal:{" "}
                <span className="font-medium">{formatarMoeda(subtotal)}</span>
              </td>
            </tr>
            <tr>
              <td
                colSpan={5}
                className="px-11 pt-1 text-right text-sm text-gray-800 "
              >
                Frete: {formatarMoeda(frete)}
              </td>
            </tr>
            <tr>
              <td
                colSpan={5}
                className="px-11 pt-1 text-right text-sm text-gray-800"
              >
                Total:
                <span className="ml-1 inline-block text-sm font-medium text-gray-800 md:text-base lg:text-lg">
                  {formatarMoeda(total)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
