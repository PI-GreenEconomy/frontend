import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex">
      <header className="font-bold">Categoria</header>
      <p className="h-full">{categoria.tipo}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex w-full items-center justify-center"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex w-full items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
