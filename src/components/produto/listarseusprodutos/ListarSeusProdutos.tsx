import { DNA } from "react-loader-spinner";
import { useProduto } from "../../../hooks/useProduto";
import { useContext, useEffect } from "react";
import { CardEditarProduto } from "./CardEditarProduto";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

function ListarSeusProdutos() {
  const { buscarProdutos, produtos } = useProduto();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  const produtosUsuario = produtos.filter(
    (produto) => produto.usuario?.usuario === usuario.usuario,
  );

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
      {produtosUsuario.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h1 className="text-3xl">Nenhum produto foi encontrado</h1>
          <p className="text-base text-gray-600">Deseja cadastrar um agora?</p>
          <Link
            className="rounded bg-primary px-4 py-2 text-lg text-white hover:bg-primary/90"
            to={"/cadastrarproduto"}
          >
            Cadastrar Produto
          </Link>
        </div>
      )}

      <div className="container my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {produtosUsuario.map((produto) => (
          <CardEditarProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}
export default ListarSeusProdutos;
