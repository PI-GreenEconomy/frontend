import { ListarProdutoCategoria } from "../../components/produto/listarprodutocategoria/ListarProdutoCategoria";
import { useProduto } from "../../hooks/useProduto";
import BemVindo from "./components/BemVindo";

function Home() {
  const { produtos } = useProduto();

  return (
    <div className="flex flex-col gap-10">
      <BemVindo />

      {produtos.length > 0 && (
        <div className="container">
          <ListarProdutoCategoria
            titulo="de Higiene"
            produtos={produtos}
            tipoCategoria="higiene"
          />

          <ListarProdutoCategoria
            titulo="de Casa"
            produtos={produtos}
            tipoCategoria="casa"
          />

          <ListarProdutoCategoria
            titulo="de Vestuário"
            produtos={produtos}
            tipoCategoria="vestuario"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
