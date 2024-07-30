import {
  ArrowDownIcon,
  ChevronRightIcon,
  Facebook,
  HeartIcon,
  Instagram,
  ShoppingCartIcon,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProduto } from "../../hooks/useProduto";
import { useContext, useEffect } from "react";
import { EstrelaProdutos } from "../../components/EstrelaProdutos";
import {
  calcularValorTotalProduto,
  formatarMoeda,
  verificaDesconto,
  verificaFreteGratuito,
  verificaParcela,
} from "../../utils/preco";
import { BotaoQuantidade } from "../../components/BotaoQuantidade";
import { CartContext } from "../../contexts/CartContext";
import { IMAGES } from "../../data/imageIcons";
import { ListarProdutoCategoria } from "../../components/produto/listarprodutocategoria/ListarProdutoCategoria";
import { ProdutoMock } from "./components/ProdutoMock";
import { transformarFotoProduto } from "../../utils/fotoProduto";
import { CalculaCep } from "../../components/cep/CalculaCep";

const pagamentos = [
  IMAGES.Visa,
  IMAGES.MasterCard,
  IMAGES.Elo,
  IMAGES.Caixa,
  IMAGES.BancoDoBrasil,
  IMAGES.Bradesco,
  IMAGES.Boleto,
  IMAGES.Pix,
];

export const Produto = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { adicionarProduto } = useContext(CartContext);

  const handleCompraProduto = () => {
    adicionarProduto(produto);
    navigate("/cart");
  };

  const { produtos, produto, buscarProdutoPorId } = useProduto();

  if (!id) navigate("/");

  useEffect(() => {
    buscarProdutoPorId(id!);
  }, [id]);

  const existeDesconto = verificaDesconto(produto.porcentagemDesconto);
  const precoAtual = calcularValorTotalProduto(produto);
  const frete = verificaFreteGratuito(precoAtual);
  const podeParcelar = verificaParcela(precoAtual);

  if (!produtos.length || produto.basePreco < 0 || !produto.basePreco)
    return <ProdutoMock />;

  return (
    <div className="container py-12">
      <div className="mb-12 flex flex-wrap gap-y-1 rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
        <div className="flex">
          <Link to={"/"}>Início</Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <div className="flex">
          <Link to={"/produtos"}>Produtos</Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <div className="flex">
          <Link
            className="capitalize"
            to={`/categoria/${produto.categoria?.slug}`}
          >
            {produto.categoria?.tipo}
          </Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <span className="inline-block font-medium text-primary">
          {produto.nome}
        </span>
      </div>

      <article className="grid grid-cols-1 items-start justify-between gap-14 md:grid-cols-2">
        <div className="rounded-md border border-border">
          <img
            src={transformarFotoProduto(produto.foto)}
            alt={produto.nome}
            className="h-80 w-full rounded-md object-contain md:h-[600px]"
          />
        </div>
        <div className="flex flex-col gap-x-8 gap-y-6 sm:gap-y-8">
          <div>
            <h1 className="mb-4 text-2xl font-medium text-[#042419] md:text-[28px]">
              {produto.nome}
            </h1>
            <div className="mb-2">
              <EstrelaProdutos
                notaMedia={produto.notaMedia}
                numeroDeAvaliacoes={produto.numeroDeAvaliacoes}
              />
            </div>

            <Link
              to={`/produto/${produto.id}/${produto.slug}/avaliar`}
              className="text-sm text-primary underline hover:text-primary/90"
            >
              Avaliar produto
            </Link>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-3">
              <p className="text-2xl font-semibold text-[#042419]">
                {formatarMoeda(precoAtual)}
              </p>

              {existeDesconto && (
                <>
                  <del className="inline-block text-lg text-[#575757]">
                    {formatarMoeda(produto.basePreco)}
                  </del>
                  <div className="top-4 flex max-w-[60px] items-center justify-center gap-1 rounded bg-primary px-2 py-1 text-white">
                    <ArrowDownIcon className="size-4 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {produto.porcentagemDesconto}%
                    </span>
                  </div>
                </>
              )}
            </div>
            {podeParcelar && (
              <p className="self-end text-xs text-[#575757]">
                em até 10x de{" "}
                <strong>
                  R$ {(precoAtual / 10).toFixed(2).replace(".", ",")}{" "}
                </strong>
                sem juros
              </p>
            )}
            {frete && (
              <span className="mt-2 inline-block rounded bg-[#B3D0C6] px-2 py-1 text-[10px] font-semibold uppercase text-[#042419]">
                frete grátis!
              </span>
            )}
          </div>
          <div className="flex w-full flex-wrap items-center gap-3 lg:gap-8">
            <BotaoQuantidade />
            <button
              className="flex items-center gap-4 rounded bg-[#DAE8E3] px-4 py-2 text-sm font-semibold uppercase text-primary hover:bg-[#9abeb2] sm:text-base md:text-base"
              onClick={() => adicionarProduto(produto)}
            >
              <ShoppingCartIcon />
              Adicionar ao carrinho
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-[10px]">
            <button
              className="flex-1 rounded bg-primary px-10 py-4 uppercase text-white hover:bg-primary/90 focus:bg-primary/90"
              onClick={() => handleCompraProduto()}
            >
              Comprar
            </button>
            <button className="group flex h-[54px]  w-[60px] items-center justify-center rounded-lg border border-primary px-3 py-5 hover:bg-primary/80">
              <HeartIcon className="group-hover:bg-border-primary/80 text-primary group-hover:text-white" />
            </button>
          </div>
          <CalculaCep precoProduto={precoAtual} />
          <div className="flex flex-col gap-8">
            <div className="my-3 mt-6 flex font-poppins">
              <p className="mr-2 font-semibold">Compartilhe:</p>
              <Link
                className="ml-1 mr-2 text-slate-500"
                to={"https://linktr.ee/Greenconomy"}
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                className="ml-1 mr-2 text-slate-500"
                to={"https://linktr.ee/Greenconomy"}
                target="_blank"
              >
                <Instagram />
              </Link>
            </div>
            <ul className="flex gap-2">
              {pagamentos.map((pagamento) => (
                <li key={pagamento}>
                  <img className="h-7" src={pagamento} alt={pagamento} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <section className="flex flex-wrap items-center justify-between gap-x-4 gap-y-8 py-16">
        <div className="max-w-[800px] text-[#00100D]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Descrição do produto
          </h2>
          <p className="text-base leading-7 md:text-lg">{produto.descricao}</p>
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/GreenEconomy/Avatar/save-nature.svg?updatedAt=1719670532346"
            alt="Planeta sendo reconstruido com um consumo consciente"
            width={360}
            height={360}
          />
        </div>
      </section>

      <ListarProdutoCategoria titulo="Relacionados" produtos={produtos} />
    </div>
  );
};
