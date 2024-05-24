import { CircleUser, Search, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import { links } from "../../data/linksMenu";

export const HeaderBottom = () => {
  const { pathname } = useLocation();

  return (
    <div className="border-b border-b-border py-5">
      <div className="container flex flex-wrap items-center justify-between gap-x-2 gap-y-4 font-semibold">
        {/* LOGO AND LINKS - MENU LEFT */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          <Link to={"/"}>
            <img src={Logo} alt="Green Economy" />
          </Link>

          <ul className="gap-y- flex flex-wrap gap-x-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`py-2 transition-colors hover:text-primary focus-visible:text-primary ${pathname === link.path && "text-primary"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* INPUT SEARCH - MENU CENTER */}
        <div className="relative flex w-full max-w-[22.5rem] rounded-xl">
          <input
            className="font-roboto w-full rounded-xl border border-solid border-border px-6 py-2 text-base font-medium outline-none placeholder:font-medium placeholder:text-muted-foreground focus:border-gray-500"
            type="text"
            placeholder="Buscar Produto"
          />
          <button className="group absolute right-0 top-0 flex rounded-xl px-3 py-2 text-muted-foreground outline-none">
            <Search className="group-focus-visible:text-gray-500" />
          </button>
        </div>

        {/* LOGIN AND CART - MENU RIGHT */}
        <div className="flex gap-6">
          <div className="flex items-center justify-center gap-2 ">
            <CircleUser className="size-7" />
            <span className="inline-block max-w-24 leading-5">
              <Link
                to={"/login"}
                className="hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
              >
                Entre
              </Link>{" "}
              ou{" "}
              <Link
                to={"/cadastro"}
                className="hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
              >
                Cadastre-se
              </Link>
            </span>
          </div>

          <Link
            to={"/carrinho"}
            className="flex items-center justify-center gap-2"
          >
            <div className="relative">
              <ShoppingCart className="z-10 size-7" />
              <span className="absolute bottom-[21px] left-4 right-0 flex size-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                0
              </span>
            </div>
            <span className="sr-only md:not-sr-only">Carrinho</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
