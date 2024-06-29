import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { calcularValorTotalProduto, formatarMoeda } from "../../../utils/preco";
import { ArrowDownIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog";
import { transformarFotoProduto } from "../../../utils/fotoProduto";

interface CardEditarProdutoProps {
  produto: Produto;
}

export function CardEditarProduto({ produto }: CardEditarProdutoProps) {
  const existeDesconto = produto.porcentagemDesconto > 0;
  const precoAtual = calcularValorTotalProduto(produto);

  return (
    <div className="group relative flex w-full flex-col gap-2 rounded-md border border-border bg-white p-4 text-foreground outline-none transition-colors hover:border-border focus-visible:border-primary">
      <div className="mb-4 flex flex-1 flex-col gap-2">
        <div>
          <img
            src={transformarFotoProduto(produto.foto)}
            alt={produto.nome}
            className="h-64 w-full rounded object-contain"
          />
        </div>

        {existeDesconto && (
          <div className="absolute top-4 flex max-w-[60px] items-center justify-center gap-1 rounded bg-primary px-2 py-1 text-white">
            <ArrowDownIcon className="size-4 flex-shrink-0" />
            <span className="text-sm font-medium">
              {produto.porcentagemDesconto}%
            </span>
          </div>
        )}

        <div>
          <div className="mb-4">
            <p className="mb-1 w-full truncate text-left text-base text-[#00100D]">
              {produto.nome}
            </p>
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

          <Dialog>
            <DialogTrigger className="max-h-[90%] w-full rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300 focus:bg-gray-300">
              Exibir detalhes
            </DialogTrigger>
            <DialogContent className="overflow-auto p-4">
              <div className="mb-2 flex items-center  gap-4">
                <DialogTitle>{produto.nome}</DialogTitle>

                <div className="flex items-center gap-2">
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
              <img
                src={transformarFotoProduto(produto.foto)}
                alt={produto.nome}
                className="h-48 w-full rounded object-contain"
              />

              <DialogDescription className="mb-4 max-h-36 overflow-auto text-base text-foreground">
                <strong>Descrição:</strong> <span>{produto.descricao}</span>
              </DialogDescription>

              <div className="z-20 mb-2 flex w-full flex-wrap items-end justify-center gap-1 font-medium">
                <Link
                  to={`/editarproduto/${produto.id}`}
                  className="flex flex-1 items-center justify-center gap-3 rounded-md bg-primary px-4 py-2 font-medium uppercase text-white hover:bg-[#084E35]"
                >
                  Editar
                </Link>

                <Link
                  to={`/deletarproduto/${produto.id}`}
                  className="flex flex-1 items-center justify-center gap-3 rounded-md bg-primary bg-red-700 px-4 py-2 font-medium uppercase text-white hover:bg-red-600"
                >
                  Remover
                </Link>
              </div>
              <p className="text-[#4B5563]">
                Vendido por: <strong>{produto.usuario?.usuario}</strong>
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="z-20 mb-2 flex w-full flex-wrap items-end justify-center gap-1 font-medium">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="flex flex-1 items-center justify-center gap-3 rounded-md bg-primary px-4 py-2 font-medium uppercase text-white hover:bg-[#084E35]"
        >
          Editar
        </Link>

        <Link
          to={`/deletarproduto/${produto.id}`}
          className="flex flex-1 items-center justify-center gap-3 rounded-md bg-primary bg-red-700 px-4 py-2 font-medium uppercase text-white hover:bg-red-600"
        >
          Remover
        </Link>
      </div>
    </div>
  );
}
