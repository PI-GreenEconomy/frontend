import {
  ArrowDownIcon,
  ChevronRightIcon,
  Facebook,
  HeartIcon,
  Instagram,
  ShoppingCartIcon,
  Twitter,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProduto } from "../../hooks/useProduto";
import { useContext, useEffect } from "react";
import { EstrelaProdutos } from "../../components/EstrelaProdutos";
import { calcularValorTotalProduto, formatarMoeda } from "../../utils/preco";
import { BotaoQuantidade } from "../../components/BotaoQuantidade";
import { CartContext } from "../../contexts/CartContext";
import { IMAGES } from "../../data/imageIcons";
import ImagemDescricao from "../../assets/descricao/save-nature.svg";
import { ListarProduto } from "../../components/produto/listarproduto/ListarProduto";
import { ListarProdutoCategoria } from "../../components/produto/listarprodutocategoria/ListarProdutoCategoria";

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

  const { produtos, produto, buscarProdutoPorId } = useProduto();

  if (!produto) navigate("/");

  const existeDesconto = produto.porcentagemDesconto > 0;
  const frete = produto.basePreco >= 100;
  const precoAtual = calcularValorTotalProduto(produto);
  const podeParcelar = produto.basePreco >= 50;

  useEffect(() => {
    buscarProdutoPorId(id!);
  }, []);

  return (
    <div className="container py-12">
      <div className="mb-12 flex rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
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
            to={`/categoria/${produto.categoria?.tipo}`}
          >
            {produto.categoria?.tipo}
          </Link>
          <ChevronRightIcon className="size-6" />
        </div>
        <span className="inline-block font-medium text-primary">
          {produto.nome}
        </span>
      </div>

      <article className="grid grid-cols-2 items-center justify-between gap-14">
        <div className="h-full rounded-md border border-border">
          <img
            src={produto.foto}
            alt={produto.nome}
            className="h-[600px] w-full rounded-md object-contain"
          />
        </div>
        <div className="flex max-w-[520px] flex-col gap-8">
          <div>
            <h1 className="mb-2 text-[28px] font-medium text-[#042419]">
              {produto.nome}
            </h1>
            <EstrelaProdutos
              notaMedia={produto.notaMedia}
              numeroDeAvaliacoes={produto.numeroDeAvaliacoes}
            />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-3">
              <p className="text-2xl font-semibold text-[#042419]">
                {formatarMoeda(precoAtual)}
              </p>
              <del className="inline-block text-lg text-[#575757]">
                {formatarMoeda(produto.basePreco)}
              </del>

              {existeDesconto && (
                <div className="top-4 flex max-w-[60px] items-center justify-center gap-1 rounded bg-primary px-2 py-1 text-white">
                  <ArrowDownIcon className="size-4 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    {produto.porcentagemDesconto}%
                  </span>
                </div>
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
              <span className="rounded bg-[#B3D0C6] px-2 py-1 text-[10px] font-semibold uppercase text-[#042419]">
                frete grátis!
              </span>
            )}
          </div>
          <div className="flex items-center gap-8">
            <BotaoQuantidade />
            <button
              className="flex items-center gap-4 rounded bg-[#DAE8E3] px-4 py-2 font-semibold uppercase text-primary hover:bg-[#9abeb2]"
              onClick={() => adicionarProduto(produto)}
            >
              <ShoppingCartIcon />
              Adicionar ao carrinho
            </button>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="flex-1 rounded bg-primary px-10 py-4 uppercase text-white hover:bg-primary/90 focus:bg-primary/90">
              Comprar
            </button>
            <button className="group flex h-[54px]  w-[60px] items-center justify-center rounded-lg border border-primary px-3 py-5 hover:bg-primary/80">
              <HeartIcon className="group-hover:bg-border-primary/80 text-primary group-hover:text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="my-3 mt-6 flex font-poppins">
              <p className="mr-2 font-semibold">Compartilhe:</p>
              <Link className="ml-1 mr-2 text-slate-500" to={"/"}>
                <Facebook />
              </Link>
              <Link className="ml-1 mr-2 text-slate-500" to={"/"}>
                <Instagram />
              </Link>
              <Link className="ml-1 text-slate-500" to={"/"}>
                <Twitter />
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

      <section className="flex items-center justify-between gap-4 py-16">
        <div className="max-w-[800px] text-[#00100D]">
          <h2 className="mb-8 text-4xl font-semibold">Descrição do produto</h2>
          <p className="text-lg">{produto.descricao}</p>
        </div>
        <div>
          <img
            src={ImagemDescricao}
            alt="Planeta sendo reconstruido com um consumo consciente"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-4xl font-semibold">Produtos Relacionados</h2>
        <ListarProdutoCategoria produtos={produtos} />
      </section>
    </div>
  );
};
