import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import {
  ShirtIcon,
  SaladIcon,
  BathIcon,
  BoneIcon,
  HomeIcon,
  BookOpenIcon,
  UtensilsIcon,
  LeafIcon,
  PercentIcon,
  BoxIcon,
} from "lucide-react";

const icons: any = {
  default: <BoxIcon className="size-16" />,
  vestuario: <ShirtIcon className="size-16" />,
  alimento: <SaladIcon className="size-16" />,
  higiene: <BathIcon className="size-16" />,
  pets: <BoneIcon className="size-16" />,
  casa: <HomeIcon className="size-16" />,
  papelaria: <BookOpenIcon className="size-16" />,
  utensilios: <UtensilsIcon className="size-16" />,
  artesanal: <LeafIcon className="size-16" />,
  ofertas: <PercentIcon className="size-16" />,
};

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-slate-300">
      <div className="align-center flex h-full flex-col items-center justify-center py-14">
        {icons[categoria.slug] || icons["default"]}
        <p className="py-2 text-xl font-bold">{categoria.tipo}</p>
      </div>

      <div className="text-lg font-semibold text-slate-100">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex w-full justify-center bg-green-800 py-4 hover:bg-primary"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className=" my-px flex w-full justify-center bg-red-600 py-4 hover:bg-red-700"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
