import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Produto from "../../../models/Produto";

interface CardProdutosProps {
  item: Produto;
}

function CardCart({ item }: CardProdutosProps) {
  const { removerProduto } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-lg bg-white">
      <div className="py-4">
        <img
          src={item.foto}
          className="max-w-75 mx-auto mt-1 h-40"
          alt={item.nome}
        />

        <div className="p-4">
          <p className="text-center text-sm uppercase">{item.nome}</p>
          <h3 className="text-center text-xl font-bold uppercase">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.basePreco)}
          </h3>
          <p className="text-center text-sm italic">Categoria: Tipo </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button
          className="flex w-full items-center justify-center 
                                   bg-red-500 py-2 text-slate-100 hover:bg-red-700"
          onClick={() => removerProduto(item.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default CardCart;
