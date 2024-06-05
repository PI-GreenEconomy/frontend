import { useParams } from "react-router-dom";
import { AvaliacaoDetalhe } from "./components/AvaliacaoDetalhe";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useProduto } from "../../hooks/useProduto";

export const Avaliacao = () => {
  const { id } = useParams<{ id: string }>();

  const { usuario, isLoading } = useContext(AuthContext);

  const { produto, setProduto, buscarProdutoPorId } = useProduto();

  useEffect(() => {
    buscarProdutoPorId(id!);
  }, [isLoading]);

  if (!produto && !usuario.token) {
    return null;
  }

  return <AvaliacaoDetalhe produto={produto} setProduto={setProduto} />;
};
