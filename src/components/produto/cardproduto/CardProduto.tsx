import { ArrowDown } from "lucide-react";
import Produto from "../../../models/Produto";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  const existeDesconto = produto.porcentagemDesconto > 0;
  const { adicionarProduto } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex w-64 flex-col gap-4 rounded-md px-4 py-4 shadow-md">
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
            className="h-50 items-center rounded"
            alt=""
          />
        </div>
        <div>
          <p className="text-xs">4.5 (8 avaliações)</p>
          <h3 className="text-left">{produto.nome}</h3>
          <h4 className="text-left text-base font-semibold uppercase">
            R$ {produto.basePreco}
          </h4>
          <p className="text-xs">
            em até 10x de R$ {produto.porcentagemDesconto} sem juros
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button
          className="flex w-full items-center justify-center bg-teal-500 py-2 text-white hover:bg-teal-900"
          onClick={() => adicionarProduto(produto)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
