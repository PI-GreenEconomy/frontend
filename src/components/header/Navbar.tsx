/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BathIcon,
  BoneIcon,
  BookOpenIcon,
  HomeIcon,
  LeafIcon,
  PercentIcon,
  SaladIcon,
  ShirtIcon,
  UtensilsIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { categorias } from "../../data/categorias";

const icons: any = {
  vestuario: <ShirtIcon className="size-7" />,
  alimento: <SaladIcon className="size-7" />,
  higiene: <BathIcon className="size-7" />,
  pets: <BoneIcon className="size-7" />,
  casa: <HomeIcon className="size-7" />,
  papelaria: <BookOpenIcon className="size-7" />,
  utensilios: <UtensilsIcon className="size-7" />,
  artesanal: <LeafIcon className="size-7" />,
  ofertas: <PercentIcon className="size-7" />,
};

export const Navbar = () => {
  return (
    <div className="border-b border-b-border py-2">
      <nav>
        <ul className="flex w-full items-center justify-center gap-6 overflow-auto py-1">
          {categorias.map((categoria) => (
            <li key={categoria.id}>
              <Link
                to={`categorias/${categoria.slug}`}
                className="flex flex-col items-center gap-1 rounded-md p-1 transition-colors hover:text-primary focus-visible:text-primary"
              >
                <div>{icons[categoria.slug]}</div>

                <span className="text-sm font-semibold">{categoria.tipo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
