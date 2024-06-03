import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
      <header className="bg-green-900 px-6 py-2 text-2xl font-bold text-green-400">
        Categoria
      </header>
      <p className="h-full bg-slate-200 p-8 text-3xl">{categoria.tipo}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex w-full items-center justify-center 
                    bg-slate-600 py-2 text-slate-100 hover:bg-slate-800"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex w-full items-center justify-center 
                    bg-red-600 text-slate-100 hover:bg-red-500"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
