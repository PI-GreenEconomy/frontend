import { ArrowDown } from "lucide-react";
import Produto from "../../../models/Produto";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import { calcularValorTotalProduto, formatarMoeda } from "../../../utils/preco";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  const existeDesconto = produto.porcentagemDesconto > 0;
  const { adicionarProduto } = useContext(CartContext);
  const frete = produto.basePreco >= 100;
  const precoAtual = calcularValorTotalProduto(produto);

  return (
    <Link
      className="relative block"
      to={`/produtos/${produto.id}/${produto.slug}`}
    >
      <div className="flex flex-col justify-center ">
        <div className="flex flex-col gap-4 rounded-md px-4 py-4 shadow-md">
          {existeDesconto && (
            <div className="absolute flex items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              <div className="flex w-14 rounded border-solid bg-primary font-poppins text-sm text-white">
                <p className="w-5 p-1.5">
                  <ArrowDown size={14} color="#ffffff" />
                </p>

                <p className="p-1">{produto.porcentagemDesconto}%</p>
              </div>
            </div>
          )}

          <div>
            <img
              src={produto.foto}
              className="h-50 size-72 items-center rounded object-contain"
              alt=""
            />
          </div>
          <div>
            <p className="mb-1 text-xs">
              {produto.notaMedia.toFixed(1)} ({produto.numeroDeAvaliacoes}{" "}
              avaliações)
            </p>
            <h3 className="w-full truncate text-left">{produto.nome}</h3>
            <h4 className="text-left text-base font-semibold uppercase">
              {formatarMoeda(precoAtual)}
            </h4>
            <p className="text-xs">
              em até 10x de R$ {(precoAtual / 10).toFixed(2).replace(".", ",")}{" "}
              sem juros
            </p>
          </div>

          {frete && (
            <div className="-my-2">
              <div className="flex w-20 items-center justify-center rounded-md bg-primary p-1 text-xs font-bold text-white">
                <p>Frete grátis</p>
              </div>
            </div>
          )}

          <button
            className="flex w-full items-center justify-center rounded-md bg-primary py-1.5 text-white hover:bg-green-800"
            onClick={() => adicionarProduto(produto)}
          >
            Comprar
          </button>
        </div>
      </div>
    </Link>
  );
}
