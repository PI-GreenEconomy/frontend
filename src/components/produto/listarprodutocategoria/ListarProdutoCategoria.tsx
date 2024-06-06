import { useParams } from "react-router-dom";
import { ListarProduto } from "../listarproduto/ListarProduto";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";

interface ListarProdutoCategoriaProps {
  produtos: Produto[];
  categoria?: Categoria;
}

export const ListarProdutoCategoria = ({
  produtos,
}: ListarProdutoCategoriaProps) => {
  const { categoria } = useParams();

  const produtosCategoria = categoria
    ? produtos.filter((produto) => categoria === produto.categoria?.slug)
    : produtos;

  return (
    <div>
      <ListarProduto produtos={produtosCategoria} />
    </div>
  );
};
