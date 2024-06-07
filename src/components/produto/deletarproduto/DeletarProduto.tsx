import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useProduto } from "../../../hooks/useProduto";
import { calcularValorTotalProduto, formatarMoeda } from "../../../utils/preco";

function DeletarProduto() {
  const navigate = useNavigate();

  const { buscarProdutoPorId, deletarProduto, produto, isLoading } =
    useProduto();

  const { id } = useParams<{ id: string }>();

  const existeDesconto = produto.porcentagemDesconto > 0;
  const precoAtual = calcularValorTotalProduto(produto);

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  if (!id) return;

  return (
    <div className="container mx-auto w-1/3 py-8">
      <h1 className="py-4 text-center text-4xl">Deletar Produto</h1>
      <p className="mb-4 text-center font-semibold">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>
      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <div className="container py-2">
          <h2 className="py-2 text-lg font-medium text-foreground">
            {produto.nome}
          </h2>
          <img
            src={produto.foto}
            alt={produto.nome}
            className="h-48 w-full rounded object-contain"
          />
          <div>
            <div className="mb-2 flex items-center gap-1">
              <p className="text-lg font-semibold text-[#042419]">
                {formatarMoeda(precoAtual)}
              </p>
              {existeDesconto && (
                <del className="inline-block text-[12px] text-[#575757]">
                  {formatarMoeda(produto.basePreco)}
                </del>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Criado por {produto.usuario?.usuario}
          </p>
        </div>
        <div className="flex">
          <button
            className="w-full bg-red-700 py-2 text-slate-100 hover:bg-red-600"
            onClick={() => navigate("/seusprodutos")}
          >
            Não
          </button>
          <button
            className="flex w-full items-center justify-center bg-primary text-slate-100 hover:bg-green-700"
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
