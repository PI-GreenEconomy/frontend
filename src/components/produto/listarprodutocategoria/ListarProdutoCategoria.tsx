import { useParams } from "react-router-dom";
import { ListarProduto } from "../listarproduto/ListarProduto";
import Produto from "../../../models/Produto";

interface ListarProdutoCategoriaProps {
  titulo: string;
  produtos: Produto[];
  tipoCategoria?: string;
}

export const ListarProdutoCategoria = ({
  titulo,
  produtos,
  tipoCategoria,
}: ListarProdutoCategoriaProps) => {
  const { categoria } = useParams();

  let produtosFiltrados = produtos;

  if (categoria) {
    produtosFiltrados = produtos
      .filter((produto) => categoria === produto.categoria?.slug)
      .slice(0, 4);
  } else if (tipoCategoria) {
    produtosFiltrados = produtos
      .filter((produto) => tipoCategoria === produto.categoria?.slug)
      .slice(0, 4);
  }

  return (
    <section className="py-8 text-foreground">
      <h2 className="mb-8 text-3xl md:text-4xl">
        Produtos <span className="text-primary">{titulo}</span>
      </h2>
      <ListarProduto produtos={produtosFiltrados} />
    </section>
  );
};
