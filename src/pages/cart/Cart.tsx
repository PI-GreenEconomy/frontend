import { ArrowLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import InfoCart from "./components/InfoCart";
import TableCart from "./components/TableCart";

export default function CartPage() {
  const { produtos } = useCart();

  const navigate = useNavigate();

  if (produtos.length === 0)
    return (
      <div className="flex flex-col gap-4 py-8">
        <h1 className="my-8 text-center text-4xl">Carrinho de Compras</h1>
        <h2 className="mb-8 text-center text-2xl">O Carrinho está vazio!</h2>
        <button
          className="mx-auto flex max-w-[300px] items-center justify-center gap-3 rounded-md bg-primary/90 px-4 py-2 font-medium uppercase text-white hover:bg-primary"
          onClick={() => navigate("/produtos")}
        >
          Explore nossos produtos
        </button>
      </div>
    );

  return (
    <div className="container relative py-12 text-foreground">
      <div className="mb-12 flex flex-wrap gap-y-1 rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
        <div className="flex">
          <Link to={"/"}>Início</Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <span className="inline-block font-medium text-primary">Carrinho</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4 lg:flex-row-reverse">
        <div className="flex w-full flex-col flex-wrap items-start gap-6 md:flex-row lg:sticky lg:top-9 lg:flex-1">
          <InfoCart />
        </div>
        <section className="w-full rounded border border-border py-5 lg:flex-[2]">
          <h1 className="mb-5 px-6 text-xl font-medium">Carrinho de Compras</h1>
          <TableCart />
          <div className="my-6 border-t border-t-border"></div>
          <div className="flex items-center justify-between gap-2 px-4 py-6">
            <Link
              to="/produtos"
              className="flex items-center gap-2 rounded-sm border border-primary px-6 py-3 text-sm font-semibold uppercase text-[#085339] transition-colors hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white"
            >
              <ArrowLeftIcon className="size-5" />
              Voltar para a loja
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
