import { ListarProdutoCategoria } from "../../components/produto/listarprodutocategoria/ListarProdutoCategoria";
import { useProduto } from "../../hooks/useProduto";
import BemVindo from "./components/BemVindo";

function Home() {
  const { produtos } = useProduto();

  return (
    <div>
      <BemVindo />
      <section className="container py-16 text-foreground">
        <h1 className="mb-4 text-4xl">Produtos de Higiene</h1>
        <ListarProdutoCategoria produtos={produtos} />
      </section>
    </div>
  );
}

export default Home;
