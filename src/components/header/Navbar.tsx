import { Link, useLocation } from "react-router-dom";
import { SheetClose } from "../ui/Sheet";
import { useCategoria } from "../../hooks/useCategoria";
import { Skeleton } from "../ui/Skeleton";
import { iconsCategoria } from "../../data/iconCategorias";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { categorias } = useCategoria();

  if (pathname === "/login" || pathname === "/cadastro") return null;

  return (
    <nav className="hidden border-b border-b-border py-1 md:block">
      <ul className="flex w-full items-center justify-center gap-1 py-1 lg:gap-6">
        {categorias.length === 0
          ? Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} className="h-[68px] w-[80px] rounded-xl" />
            ))
          : categorias.map((categoria) => (
              <li key={categoria.id} className="w-fit">
                <Link
                  to={`produtos/categoria/${categoria.slug}`}
                  className="flex flex-col items-center gap-1 rounded-md bg-[#E7F0ED] bg-transparent p-1 px-3 py-2 text-[#4A695E] text-current transition-colors hover:text-primary focus-visible:text-primary lg:px-4"
                >
                  <div>{iconsCategoria[categoria.slug]}</div>
                  <span className="text-sm font-semibold">
                    {categoria.tipo}
                  </span>
                </Link>
              </li>
            ))}
      </ul>{" "}
    </nav>
  );
};

export const NavbarMobile = () => {
  const { categorias } = useCategoria();

  return (
    <nav>
      <ul className="flex w-full flex-col items-start justify-center gap-2">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="w-full">
            <SheetClose asChild>
              <Link
                to={`produtos/categoria/${categoria.slug}`}
                className="flex w-full flex-row items-center gap-4 rounded-md bg-[#E7F0ED] px-6 py-3 font-normal transition-colors hover:text-primary focus-visible:text-primary"
              >
                <div className="text-[#0A6847]">
                  {iconsCategoria[categoria.slug]}
                </div>

                <span className="text-sm font-medium">{categoria.tipo}</span>
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
    </nav>
  );
};
