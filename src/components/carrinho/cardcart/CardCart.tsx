import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Produto from "../../../models/Produto";
import { transformarFotoProduto } from "../../../utils/fotoProduto";

interface CardProdutosProps {
  item: Produto;
}

function CardCart({ item }: CardProdutosProps) {
  const { removerProduto } = useContext(CartContext);

  return (
    <div className="align-center flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
      <div className="py-4">
        <img
          src={transformarFotoProduto(item.foto)}
          className="max-w-75 mx-auto mt-1 h-40 rounded-lg"
          alt={item.nome}
        />

        <div className="p-4">
          <p className="text-center text-sm font-bold uppercase">{item.nome}</p>
          <h3 className="text-center text-xl font-bold uppercase">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.basePreco)}
          </h3>
          <p className="text-center text-sm font-bold text-primary">
            Categoria: {item.categoria?.tipo}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button
          className="flex w-full items-center justify-center rounded bg-earth py-2 font-bold uppercase text-slate-100 hover:bg-[#ca8d50]"
          onClick={() => removerProduto(item.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default CardCart;
