import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardEditarProdutoProps {
  produto: Produto;
}

export function CardEditarProduto({ produto }: CardEditarProdutoProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded border border-slate-900">
      <div>
        <div className="flex w-full items-center gap-4 bg-indigo-400 px-4 py-2">
          <img src={produto.foto} className="h-12 rounded-full" alt="" />
          <h3 className="text-center text-lg font-bold uppercase ">
            {produto.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">
            R$ {produto.basePreco}
          </h4>
          <p>{produto.descricao}</p>
          <p>Tema: {produto.categoria?.tipo}</p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="flex w-full items-center justify-center bg-indigo-400 py-2 text-white hover:bg-indigo-800"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`}
          className="flex w-full items-center justify-center bg-red-400 text-white hover:bg-red-700"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}
