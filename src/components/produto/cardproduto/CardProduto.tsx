import { useContext } from "react";
import Produto from "../../../models/Produto";
import { CartContext } from "../../../contexts/CartContext";
import {
  calcularValorTotalProduto,
  formatarMoeda,
  verificaDesconto,
  verificaFreteGratuito,
  verificaParcela,
} from "../../../utils/preco";
import { Link } from "react-router-dom";
import { EstrelaProdutos } from "../../EstrelaProdutos";
import { ArrowDownIcon, ShoppingCartIcon } from "lucide-react";
import { BotaoQuantidade } from "../../BotaoQuantidade";
import { transformarFotoProduto } from "../../../utils/fotoProduto";
interface CardProdutoProps {
  produto: Produto;
}

export const CardProduto = ({ produto }: CardProdutoProps) => {
  const { adicionarProduto } = useContext(CartContext);

  const existeDesconto = verificaDesconto(produto.porcentagemDesconto);
  const precoAtual = calcularValorTotalProduto(produto);
  const frete = verificaFreteGratuito(precoAtual);
  const podeParcelar = verificaParcela(precoAtual);

  return (
    <div className="group relative flex w-full flex-col gap-2 rounded-md border border-border bg-white p-4 text-foreground outline-none transition-colors hover:border-border focus-visible:border-primary">
      <Link
        to={`/produto/${produto.id}/${produto.categoria?.slug}/${produto.slug}`}
        className="flex flex-1 flex-col gap-2"
      >
        <div>
          <img
            src={transformarFotoProduto(produto.foto)}
            alt={produto.nome}
            className="h-64 w-full rounded object-contain"
            width={263}
            height={256}
            loading="lazy"
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

      <div className="flex w-full flex-wrap items-end justify-start gap-2 font-medium">
        <BotaoQuantidade />
        <button
          className="flex flex-1 items-center justify-center gap-3 rounded-md bg-primary px-1 py-2 text-base font-medium uppercase text-white hover:bg-primary/90"
          onClick={() => adicionarProduto(produto)}
        >
          <ShoppingCartIcon className="size-5" /> Adicionar
        </button>
      </div>
    </div>
  );
};
