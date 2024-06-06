import { DNA } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import { CardProduto } from "../cardproduto/CardProduto";

interface ListarProdutoProps {
  produtos: Produto[];
}

export const ListarProduto = ({ produtos }: ListarProdutoProps) => {
  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
};
