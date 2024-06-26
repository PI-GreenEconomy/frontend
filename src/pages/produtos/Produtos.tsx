import { Link, useLocation, useParams } from "react-router-dom";
import { ListarProduto } from "../../components/produto/listarproduto/ListarProduto";
import Paginacao from "./components/Paginacao";
import { useEffect, useState } from "react";
import { useProduto } from "../../hooks/useProduto";
import { calcularValorTotalProduto } from "../../utils/preco";
import { ChevronRightIcon } from "lucide-react";
import Produto from "../../models/Produto";

const tiposDeFiltros = [
  {
    nome: "Popularidade",
    acao: "popularidade",
  },
  {
    nome: "Maior preço",
    acao: "preco-maior",
  },
  {
    nome: "Menor preço",
    acao: "preco-menor",
  },
  {
    nome: "Maior desconto",
    acao: "desconto-maior",
  },
  {
    nome: "Ordem alfabética (A-Z)",
    acao: "alfabetica-asc",
  },
];

function Produtos() {
  const { id, tipo, query } = useParams();
  const { pathname } = useLocation();

  const idAtual = id ? Number(id) : 1;

  const [paginaAtual, setPaginaAtual] = useState(idAtual);
  const [tipoFiltro, setTipoFiltro] = useState("default");
  const itensPorPagina = 8;

  const { produtos } = useProduto();

  const produtosOfertas = produtos.filter(
    (produto) => produto.porcentagemDesconto > 0,
  );

  const produtosPorBusca = query
    ? produtos.filter(
        (produto: Produto) =>
          produto.nome.toLowerCase().includes(query.toLowerCase()) ||
          (query === "ofertas" && produtosOfertas) ||
          produto.categoria?.tipo.toLowerCase().includes(query.toLowerCase()),
      )
    : produtos;

  const produtosCategoria =
    tipo === "ofertas"
      ? produtosOfertas
      : tipo
        ? produtosPorBusca.filter((produto) => tipo === produto.categoria?.slug)
        : produtosPorBusca;

  const mudarPagina = (numeroPagina: number) => {
    setPaginaAtual(numeroPagina);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      const novaPaginaAtual = paginaAtual - 1;
      setPaginaAtual(novaPaginaAtual);
    }
  };

  const proximaPagina = () => {
    if (paginaAtual < Math.ceil(produtosCategoria.length / itensPorPagina)) {
      const novaPaginaAtual = paginaAtual + 1;
      setPaginaAtual(novaPaginaAtual);
    }
  };

  const mudarFiltro = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoFiltro(evento.target.value);
  };

  const produtosFiltrados = [...produtosCategoria].sort(
    (produtoA, produtoB) => {
      const precoProdutoA = calcularValorTotalProduto(produtoA);
      const precoProdutoB = calcularValorTotalProduto(produtoB);

      switch (tipoFiltro) {
        case "popularidade":
          return produtoB.notaMedia - produtoA.notaMedia;
        case "preco-maior":
          return precoProdutoB - precoProdutoA;
        case "preco-menor":
          return precoProdutoA - precoProdutoB;
        case "desconto-maior":
          return produtoB.porcentagemDesconto - produtoA.porcentagemDesconto;
        case "desconto-menor":
          return produtoA.porcentagemDesconto - produtoB.porcentagemDesconto;
        case "alfabetica-asc":
          return produtoA.nome.localeCompare(produtoB.nome);
        default:
          return 0;
      }
    },
  );

  useEffect(() => {
    setPaginaAtual(1);
  }, [pathname]);

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const produtosAtuais = produtosFiltrados.slice(
    indicePrimeiroItem,
    indiceUltimoItem,
  );

  return (
    <div className="container py-16">
      <div className="mb-4">
        <div className="flex rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
          <div className="flex">
            <Link to={"/"}>Início</Link>
            <ChevronRightIcon className="size-6" />
          </div>
          {tipo || query ? (
            <>
              <div className="flex">
                <Link to={"/produtos"}>Produtos</Link>
                <ChevronRightIcon className="size-6" />
              </div>
              <span className="inline-block font-medium capitalize text-primary">
                {tipo || query}
              </span>
            </>
          ) : (
            <span className="inline-block font-medium capitalize text-primary">
              Produtos
            </span>
          )}
        </div>
      </div>
      <h2 className="mb-12 text-3xl">Todos os Produtos</h2>
      <div className="mb-14 flex flex-wrap items-center justify-between gap-6">
        <p>Foram encontrados no total {produtosCategoria.length} produtos</p>
        <div className="flex flex-wrap items-center gap-4">
          <label htmlFor="filtro">Ordenar por</label>
          <select
            name="filtro"
            id="filtro"
            value={tipoFiltro}
            onChange={mudarFiltro}
            className="rounded-md border border-[#CBD5E1] p-2 outline-none placeholder:text-[#94A3B8] focus:border-primary"
          >
            <option value="" selected>
              Selecione uma Categoria
            </option>
            {tiposDeFiltros.map((filtro) => (
              <option key={filtro.acao} value={filtro.acao}>
                {filtro.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ListarProduto produtos={produtosAtuais} />

      <div className="mt-10">
        <Paginacao
          itemsPorPagina={itensPorPagina}
          totalItens={produtosCategoria.length}
          paginaAtual={paginaAtual}
          irPaginaSeguinte={proximaPagina}
          irPaginaAnterior={paginaAnterior}
          irPaginaAtual={mudarPagina}
        />
      </div>
    </div>
  );
}

export default Produtos;
