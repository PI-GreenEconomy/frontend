import { useContext } from "react";
import Produto from "../../../models/Produto";
import { CartContext } from "../../../contexts/CartContext";
import { calcularValorTotalProduto, formatarMoeda } from "../../../utils/preco";
import { Link } from "react-router-dom";
import { EstrelaProdutos } from "../../EstrelaProdutos";
import { ArrowDownIcon, ShoppingCartIcon } from "lucide-react";
import { BotaoQuantidade } from "../../BotaoQuantidade";
interface CardProdutoProps {
  produto: Produto;
}

export const CardProduto = ({ produto }: CardProdutoProps) => {
  const { adicionarProduto } = useContext(CartContext);

  const existeDesconto = produto.porcentagemDesconto > 0;
  const frete = produto.basePreco >= 100;
  const precoAtual = calcularValorTotalProduto(produto);
  const podeParcelar = produto.basePreco >= 50;

  const fotoProduto =
    produto.foto.length > 30
      ? produto.foto
      : "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

  return (
    <div className="group relative flex w-full flex-col gap-2 rounded-md border border-border bg-white p-4 text-foreground outline-none transition-colors hover:border-border focus-visible:border-primary">
      <Link
        to={`/produto/${produto.categoria?.slug}/${produto.id}/${produto.slug}`}
        className="flex flex-1 flex-col gap-2"
      >
        <div>
          <img
            src={fotoProduto}
            alt={produto.nome}
            className="h-64 w-full rounded object-contain"
          />
        </div>

        {existeDesconto && (
          <div className="absolute top-4 flex max-w-[60px] items-center justify-center gap-1 rounded bg-primary px-2 py-1 text-white">
            <ArrowDownIcon className="size-4 flex-shrink-0" />
            <span className="text-sm font-medium">
              {produto.porcentagemDesconto}%
            </span>
          </div>
        )}

        <div>
          <div className="mb-2">
            <EstrelaProdutos
              notaMedia={produto.notaMedia}
              numeroDeAvaliacoes={produto.numeroDeAvaliacoes}
            />
          </div>

          <div className="mb-4">
            <p className="mb-1 w-full truncate text-left text-base text-[#00100D]">
              {produto.nome}
            </p>
            <div className="mb-2 flex items-center gap-1">
              <p className="text-lg font-semibold text-[#042419]">
                {formatarMoeda(precoAtual)}
              </p>
              {existeDesconto && (
                <del className="inline-block text-[12px] text-[#575757]">
                  {formatarMoeda(produto.basePreco)}
                </del>
              )}
            </div>
            {podeParcelar && (
              <p className="self-end text-xs text-[#575757]">
                em até 10x de{" "}
                <strong>
                  R$ {(precoAtual / 10).toFixed(2).replace(".", ",")}{" "}
                </strong>
                sem juros
              </p>
            )}
          </div>

          {frete && (
            <span className="rounded bg-[#B3D0C6] px-2 py-1 text-[10px] font-semibold uppercase text-[#042419]">
              frete grátis!
            </span>
          )}
        </div>
      </Link>

      <div className="z-20 flex w-full items-end justify-center gap-1 font-medium">
        <BotaoQuantidade />
        <button
          className="flex items-center justify-center gap-3 rounded-md bg-primary px-4 py-2 font-medium uppercase text-white hover:bg-[#084E35]"
          onClick={() => adicionarProduto(produto)}
        >
          <ShoppingCartIcon className="size-6" /> Adicionar
        </button>
      </div>
    </div>
  );
};
