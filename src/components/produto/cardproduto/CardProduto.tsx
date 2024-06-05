import { ArrowDown } from "lucide-react";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

export function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="flex justify-center">
      <div className="flex w-64 flex-col gap-4 rounded-md px-4 py-4 shadow-md">
        <div className="absolute flex items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
          <div className="flex w-14 rounded border-solid bg-primary font-poppins text-sm text-white">
            <p className="w-5 p-1.5">
              <ArrowDown size={14} color="#ffffff" />
            </p>
            <p className="p-1">{produto.porcentagemDesconto}%</p>
          </div>
        </div>
        <div>
          <img
            src={produto.foto}
            className="h-50 items-center rounded"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm">avaliações</p>
          <h3 className="text-left">{produto.nome}</h3>
          <h4 className="text-left text-base font-semibold uppercase">
            R$ {produto.basePreco}
          </h4>
          <p className="text-xs">
            em até 10x de R$ {produto.porcentagemDesconto} sem juros
          </p>
        </div>
      </div>
    </div>
  );
}
