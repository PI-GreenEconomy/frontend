import { useProduto } from "../../../hooks/useProduto";
import { useContext, useEffect, useState } from "react";
import { CardEditarProduto } from "./CardEditarProduto";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Loading } from "../../ui/Loading";

function ListarSeusProdutos() {
  const { produtos, buscarProdutos } = useProduto();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario } = useContext(AuthContext);

  const usuarioAdmin = usuario.funcao === "ADMIN";

  const produtosUsuario = usuarioAdmin
    ? produtos
    : produtos.filter(
        (produto) => produto.usuario?.usuario === usuario.usuario,
      );

  useEffect(() => {
    const handleBuscarProdutos = async () => {
      setIsLoading(true);
      try {
        await buscarProdutos();
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    handleBuscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {isLoading && produtosUsuario.length === 0 && (
        <Loading height="80" width="80" color="#4fa94d" />
      )}

      {!isLoading && produtosUsuario.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h2 className="text-3xl">Nenhum produto foi encontrado</h2>
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
