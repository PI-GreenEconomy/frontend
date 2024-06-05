import { useProduto } from "../../../hooks/useProduto";
import { useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { CardProduto } from "../cardproduto/CardProduto";

export const ListarProduto = () => {
  const { buscarProdutos, produtos } = useProduto();

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

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
      <div className="my-4 grid grid-cols-4">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
};
