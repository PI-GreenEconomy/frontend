import { Link } from "react-router-dom";
import BemVindo2 from "../../components/home/bemvindo/BemVindo2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <div>
      {usuario.token && (
        <div>
          <Link to="/cadcategoria">Adicionar Categoria</Link>
          <Link to="/deletarcategoria/7">Deletar Categoria 7</Link>
        </div>
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
