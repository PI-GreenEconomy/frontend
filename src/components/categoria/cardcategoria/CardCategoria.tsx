import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { iconsCategoria } from "../../../data/iconCategorias";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="container max-w-60 items-center justify-center">
      <div className="flex w-full flex-col rounded-lg border border-slate-300">
        <div className="align-center flex h-full flex-col items-center justify-center py-8">
          {iconsCategoria[categoria.slug] || iconsCategoria["default"]}
          <p className="text-xl font-bold">{categoria.tipo}</p>
        </div>
      </div>
      <div className="text-lg font-semibold text-slate-100">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="mb-px flex w-full justify-center bg-primary py-4 hover:bg-[#157554] "
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex h-full w-full justify-center rounded-b-lg bg-terra
          py-4 hover:bg-[#d17b26]"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
