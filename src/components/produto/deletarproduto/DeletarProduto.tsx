import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useProduto } from "../../../hooks/useProduto";

function DeletarProduto() {
  const navigate = useNavigate();

  const { buscarProdutoPorId, deletarProduto, produto, isLoading } =
    useProduto();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  if (!id) return;

  return (
    <div className="container mx-auto w-1/3">
      <h1 className="py-4 text-center text-4xl">Deletar Produto</h1>
      <p className="mb-4 text-center font-semibold">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>
      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <header className="bg-slate-600 px-6 py-2 text-2xl font-bold text-white">
          Produto
        </header>
        <p className="h-full bg-white p-8 text-3xl">{produto.nome}</p>
        <div className="flex">
          <button
            className="w-full bg-red-400 py-2 text-slate-100 hover:bg-red-600"
            onClick={() => navigate("/produtos")}
          >
            Não
          </button>
          <button
            className="flex w-full items-center justify-center
                       bg-teal-400 text-slate-100 hover:bg-teal-700"
            onClick={() => deletarProduto(id)}
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
}
export default DeletarProduto;
