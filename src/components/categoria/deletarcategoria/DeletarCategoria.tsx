import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { useCategoria } from "../../../hooks/useCategoria";

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
    <div className="container mx-auto w-1/3 py-8">
      <h1 className="my-4 text-center text-4xl">Deletar Categoria</h1>
      <p className="mb-4 text-center font-semibold">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <header className="bg-green-600 px-6 py-2 text-2xl font-bold text-white">
          Categoria
        </header>
        <p className="h-full bg-slate-200 p-8 text-3xl">{categoria.tipo}</p>
        <div className="flex">
          <button
            className="w-full bg-red-600 py-2 text-slate-100 hover:bg-red-500"
            onClick={() => navigate("/categorias")}
          >
            Não
          </button>
          <button
            className="flex w-full items-center 
                                   justify-center bg-green-400 text-slate-100 hover:bg-green-600"
            onClick={() => deletarCategoria(id)}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
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
