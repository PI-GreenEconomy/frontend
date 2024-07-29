import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoria } from "../../../hooks/useCategoria";
import { Spinner } from "../../ui/Spinner";
import { iconsCategoria } from "../../../data/iconCategorias";

export const DeletarCategoria = () => {
  const navigate = useNavigate();

  const { buscarCategoriaPorId, deletarCategoria, categoria, isLoading } =
    useCategoria();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  if (!id) return;
  return (
    <div className="container mx-auto w-full max-w-xl py-8">
      <h1 className="my-4 text-center text-4xl">Deletar Categoria</h1>
      <p className="mb-6 text-center font-semibold">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <header className="bg-green-600 px-6 py-2 text-2xl font-bold text-white">
          Categoria
        </header>
        <div className="flex h-full flex-wrap items-center gap-4  bg-slate-200 p-8">
          <span className="*:size-9">
            {iconsCategoria[categoria.slug] || iconsCategoria["default"]}
          </span>
          <p className="text-3xl">{categoria.tipo}</p>
        </div>

        <div className="flex flex-wrap">
          <button
            className="w-full bg-red-700 py-2 text-slate-100 hover:bg-red-600 sm:flex-1"
            onClick={() => navigate("/categorias")}
          >
            Não
          </button>
          <button
            disabled={isLoading}
            className="flex w-full items-center justify-center bg-green-700 py-2 text-slate-100 hover:bg-green-600 disabled:cursor-default disabled:bg-primary/50 sm:flex-1"
            onClick={() => deletarCategoria(id)}
          >
            {isLoading ? (
              <Spinner
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
