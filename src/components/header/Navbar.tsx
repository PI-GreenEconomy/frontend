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
import { Link, useLocation } from "react-router-dom";
import { categorias } from "../../data/categorias";
import { SheetClose } from "../ui/Sheet";

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
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/cadastro") return null;

  return (
    <nav className="hidden border-b border-b-border py-1 md:block">
      <ul className="flex w-full items-center justify-center gap-1 py-1 lg:gap-6">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="w-fit">
            <Link
              to={`categorias/${categoria.slug}`}
              className="flex flex-col items-center gap-1 rounded-md bg-[#E7F0ED] bg-transparent p-1 px-3 py-2 text-[#4A695E] text-current transition-colors hover:text-primary focus-visible:text-primary lg:px-4"
            >
              <div>{icons[categoria.slug]}</div>

              <span className="text-sm font-semibold">{categoria.tipo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NavbarMobile = () => {
  return (
    <nav>
      <ul className="flex w-full flex-col items-start justify-center gap-2">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="w-full">
            <SheetClose asChild>
              <Link
                to={`categorias/${categoria.slug}`}
                className="flex w-full flex-row items-center gap-4 rounded-md bg-[#E7F0ED] px-6 py-3 font-normal transition-colors hover:text-primary focus-visible:text-primary"
              >
                <div className="text-[#0A6847]">{icons[categoria.slug]}</div>

                <span className="text-sm font-medium">{categoria.tipo}</span>
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
    </nav>
  );
};
