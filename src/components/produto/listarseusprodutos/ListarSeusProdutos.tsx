import { DNA } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import { useProduto } from "../../../hooks/useProduto";
import { useEffect } from "react";
import { CardEditarProduto } from "./CardEditarProduto";

function ListarSeusProdutos() {
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
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {produtos.map((produto) => (
          <CardEditarProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}
export default ListarSeusProdutos;
