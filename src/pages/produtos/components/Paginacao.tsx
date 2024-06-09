import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Definição das propriedades do componente Paginacao
interface PaginacaoProps {
  itemsPorPagina: number;
  totalItens: number;
  paginaAtual: number;
  irPaginaAtual: (pageNumber: number) => void;
  irPaginaAnterior: () => void;
  irPaginaSeguinte: () => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({
  itemsPorPagina,
  totalItens,
  paginaAtual,
  irPaginaAtual,
  irPaginaAnterior,
  irPaginaSeguinte,
}) => {
  const numeroPaginas = [];

  for (let i = 1; i <= Math.ceil(totalItens / itemsPorPagina); i++) {
    numeroPaginas.push(i);
  }

  const itemInicial = (paginaAtual - 1) * itemsPorPagina + 1;
  const itemFinal = Math.min(paginaAtual * itemsPorPagina, totalItens);

  return (
    <nav className="mt-4">
      <div className="flex flex-wrap items-center justify-center gap-4 space-x-2">
        <span className="text-sm text-gray-600">
          {itemInicial} - {itemFinal} de {totalItens} produtos
        </span>
        <ul className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
          <li>
            <button
              onClick={irPaginaAnterior}
              disabled={paginaAtual === 1}
              className="inline-flex size-8 items-center justify-center rounded-full border border-[#F1F1F1] bg-white p-1 text-[#252A29] hover:bg-[#0A6847] hover:text-white disabled:opacity-50"
            >
              <ChevronLeft />
              <span className="sr-only">Anterior</span>
            </button>
          </li>
          {numeroPaginas.map((pagina) => (
            <li
              key={pagina}
              className={`page-item ${pagina === paginaAtual ? "active" : ""}`}
            >
              <Link
                to={`/produtos/${pagina}`}
                onClick={() => irPaginaAtual(pagina)}
                className={`inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-[#F1F1F1] px-3 py-1 ${pagina === paginaAtual ? "bg-[#085339] text-white" : "border bg-white text-[#252A29]"}`}
              >
                {pagina}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={irPaginaSeguinte}
              disabled={paginaAtual === numeroPaginas.length}
              className="inline-flex size-8 items-center justify-center rounded-full border border-[#F1F1F1] bg-white p-1 text-[#252A29] hover:bg-[#0A6847] hover:text-white disabled:opacity-50"
            >
              <ChevronRight />
              <span className="sr-only">Próximo</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Paginacao;
