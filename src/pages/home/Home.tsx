import { Link } from "react-router-dom";
import BemVindo2 from "../../components/home/bemvindo/BemVindo2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <div>
      {usuario.token && (
        <section>
          <div className="border border-b-green-400 bg-green-300">
            <div className="container  flex justify-evenly  py-2 font-semibold text-green-950">
              <Link to="/cadcategoria">Adicionar Categoria</Link>
              <Link to="/categoria">Categorias</Link>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container  flex justify-evenly  py-2 font-semibold text-green-950">
              <Link to="/cadproduto">Adicionar Produto</Link>
              <Link to="/produto">Produtos</Link>
            </div>
          </div>
        </section>
      )}

      <BemVindo2 />

      <section className="container py-16 text-foreground">
        <h1 className="mb-4 text-4xl">Título</h1>
        <p className="max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          voluptate, illo, ipsum autem repellat, atque delectus veritatis
          architecto obcaecati explicabo accusantium ipsam minus libero
          laudantium hic omnis animi esse dignissimos?
        </p>
      </section>
    </div>
  );
}

export default Home;
