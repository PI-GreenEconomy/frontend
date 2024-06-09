import Produto from "../../../models/Produto";
import { CardProduto } from "../cardproduto/CardProduto";

interface ListarProdutoProps {
  produtos: Produto[];
}

export const ListarProduto = ({ produtos }: ListarProdutoProps) => {
  return (
    <>
      {produtos.length === 0 && (
        <div className="py-8">
          <h1 className="text-3xl">Nenhum produto foi encontrado!</h1>
        </div>
      )}
      <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
};
