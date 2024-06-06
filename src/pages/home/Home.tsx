import { ListarProdutoCategoria } from "../../components/produto/listarprodutocategoria/ListarProdutoCategoria";
import { useProduto } from "../../hooks/useProduto";
import BemVindo from "./components/BemVindo";

function Home() {
  const { produtos } = useProduto();

  return (
    <div>
      <BemVindo />
      <section className="container py-16 text-foreground">
        <h1 className="mb-8 text-4xl">
          Produtos para a <span className="text-primary">Higiene</span>
        </h1>
        <ListarProdutoCategoria produtos={produtos} tipoCategoria="higiene" />
      </section>

      <section className="container py-16 text-foreground">
        <h1 className="mb-8 text-4xl">
          Produtos para a <span className="text-primary">Casa</span>
        </h1>
        <ListarProdutoCategoria produtos={produtos} tipoCategoria="casa" />
      </section>

      <section className="container py-16 text-foreground">
        <h1 className="mb-8 text-4xl">
          Produtos para a <span className="text-primary">Casa</span>
        </h1>
        <ListarProdutoCategoria produtos={produtos} tipoCategoria="casa" />
      </section>
    </div>
  );
}

export default Home;
