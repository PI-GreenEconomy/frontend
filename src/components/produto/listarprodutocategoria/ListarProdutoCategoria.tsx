import { useParams } from "react-router-dom";
import { ListarProduto } from "../listarproduto/ListarProduto";
import Produto from "../../../models/Produto";

interface ListarProdutoCategoriaProps {
  produtos: Produto[];
  tipoCategoria?: string;
}

export const ListarProdutoCategoria = ({
  produtos,
  tipoCategoria,
}: ListarProdutoCategoriaProps) => {
  const { categoria } = useParams();

  let produtosFiltrados = produtos;

  if (categoria) {
    produtosFiltrados = produtos.filter(
      (produto) => categoria === produto.categoria?.slug,
    );
  } else if (tipoCategoria) {
    produtosFiltrados = produtos.filter(
      (produto) => tipoCategoria === produto.categoria?.slug,
    );
  }

  return (
    <div>
      <ListarProduto produtos={produtosFiltrados} />
    </div>
  );
};
