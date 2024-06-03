import { CircleUser, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/Sheet";
import { NavbarMobile } from "./Navbar";
import { links } from "../../data/linksMenu";

export const HeaderBottom = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { usuario, handleLogout } = useContext(AuthContext);
  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/login");
  }

  return (
    <div className="border-b border-b-border py-5">
      <div className="container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 font-semibold">
        {/* LOGO AND LINKS - MENU LEFT */}

        <div className="flex w-full flex-wrap items-center justify-between gap-x-10 gap-y-6 md:w-fit md:justify-normal">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col justify-between gap-4 px-0 pb-1 pt-12"
              >
                <div className="flex items-center gap-x-4 gap-y-2 px-6 ">
                  <CircleUser className="size-7" />

                  {usuario?.token ? (
                    <div className="flex-colflex-wrap flex w-full justify-between">
                      <p className="max-w-64 text-wrap break-words">
                        Olá {usuario.nome}
                      </p>
                      <SheetClose asChild>
                        <Link
                          to={"/login"}
                          onClick={logout}
                          className="text-destructive hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline "
                        >
                          Sair
                        </Link>
                      </SheetClose>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <SheetClose asChild>
                        <Link
                          to={"/login"}
                          className="font-medium text-primary hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
                        >
                          Entre
                        </Link>
                      </SheetClose>
                      ou
                      <SheetClose asChild>
                        <Link
                          to={"/cadastro"}
                          className="font-medium text-primary hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
                        >
                          Cadastre-se
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                </div>
                <nav className="px-6">
                  <ul className="flex flex-col flex-wrap gap-x-4 gap-y-2">
                    {links.map((link) => (
                      <li key={link.id}>
                        <SheetClose asChild>
                          <Link
                            to={link.path}
                            className={`py-2 transition-colors hover:text-primary focus-visible:text-primary ${pathname === link.path && "w-full text-primary"} bg- inline-flex w-full`}
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                        <div className="h-[1px] w-full bg-border"></div>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="overflow-auto py-4">
                  <NavbarMobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link to={"/"}>
            <img src={Logo} alt="Green Economy" />
          </Link>
          <Link
            to={"/carrinho"}
            className="flex items-center justify-center gap-2 md:hidden"
          >
            <div className="relative">
              <ShoppingCart className="z-10 size-7" />
              <span className="absolute bottom-[21px] left-4 right-0 flex size-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                0
              </span>
            </div>
            <span className="sr-only md:not-sr-only">Carrinho</span>
          </Link>

          <nav className="hidden flex-row md:flex">
            <ul className="flex gap-x-4 gap-y-2">
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
          </nav>
        </div>

        {/* INPUT SEARCH - MENU CENTER */}
        <div className="relative order-1 flex w-full rounded-xl lg:order-none lg:flex-1">
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
        <div className="hidden w-full items-center justify-between gap-6 md:flex md:w-fit">
          <div className="flex items-center justify-center gap-2 ">
            <CircleUser className="size-7" />

            {usuario?.token ? (
              <div>
                <p className="max-w-64 text-wrap break-words">
                  Olá {usuario.nome}
                </p>
                <Link
                  to={"/login"}
                  onClick={logout}
                  className="hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
                >
                  Sair
                </Link>
              </div>
            ) : (
              <div className="max-w-24">
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
              </div>
            )}
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
