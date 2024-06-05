import { ListarProduto } from "../../components/produto/listarproduto/ListarProduto";
import { useProduto } from "../../hooks/useProduto";
import BemVindo from "./components/BemVindo";

function Home() {
  const { produtos } = useProduto();

  return (
    <div>
      <BemVindo />
      <section className="container py-16 text-foreground">
        <h1 className="mb-4 text-4xl">Mais Vendidos</h1>
        <p className="max-w-4xl">Pequena descrição dessa seção</p>
        <ListarProduto produtos={produtos} />
      </section>
    </div>
  );
}

export default Home;
