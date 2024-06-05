import {
  ArrowDown,
  ChevronRight,
  ChevronRightIcon,
  Facebook,
  Heart,
  Instagram,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListarProduto } from "../../components/produto/listarproduto/ListarProduto";
import { useProduto } from "../../hooks/useProduto";

function Produto() {
  const [valor, setValor] = useState(0);

  function soma() {
    setValor(valor + 1);
  }
  function subtracao() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  /*const { buscarProdutoPorId, produto, isLoading } =
    useProduto();

    const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  if (!id) return;*/

  return (
    <>
      <div className="container py-2">
        <div className="flex rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
          <div className="flex">
            <Link to={"/"}>Início</Link>
            <ChevronRightIcon className="size-6" />
          </div>
          <div className="flex">
            <Link to={"/produtos"}>Produtos</Link>
            <ChevronRightIcon className="size-6" />
          </div>
          <div className="flex">
            <Link to={"/"}>'Categoria'</Link>
            <ChevronRightIcon className="size-6" />
          </div>
          <span className="inline-block font-medium text-primary">
            'Produto'
          </span>
        </div>
        <div className=" flex grid-cols-2">
          <div>
            <img
              className=" mx-5 my-3  size-80 border"
              src="https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/T-ShirtPureCotton.jpg?updatedAt=1716562502783"
              alt="imagem produto"
            />
          </div>
          <div className="mx-5 my-3">
            <h2>NOME DO PRODUTO AQUI</h2>
            <div className="flex">
              <p className=" mx-1">estrelas aqui</p>
              <p className=" mx-1">Media</p>
              <p className=" mx-1">Nº avaliação</p>
            </div>
            <p>Avaliar Produto</p>
            <div className="flex">
              <p className=" mx-1">R$ 0,00</p>
              <p className=" mx-1 line-through">R$ 0,00</p>
              <div className="mx-1 flex w-14 rounded border-solid bg-primary font-poppins text-sm text-white">
                <p className="w-5 p-1.5">
                  <ArrowDown size={14} color="#ffffff" />
                </p>
                <p className="p-1">0%</p>
              </div>
            </div>
            <div>
              <p> em até 'vezes' de 'R$0,00' sem juros</p>
            </div>
            <div className="flex">
              <div className="mx-2 flex w-auto rounded border-2  border-solid  text-black">
                <button className=" w-4" onClick={subtracao}>
                  -
                </button>
                <p className="border-1 top-2 mx-2 border-solid border-secondary">
                  {" "}
                  {valor}{" "}
                </p>
                <button className=" w-4" onClick={soma}>
                  +
                </button>
              </div>
              <div className="flex rounded bg-[#DAE8E3] p-2 text-primary">
                <ShoppingCart />
                <button className=" mx-3">ADICIONAR AO CARRINHO</button>
              </div>
            </div>
            <div className="mx-1 flex">
              <button className=" bg-primary text-white">COMPRAR</button>
              <button>
                <Heart />
              </button>
            </div>
            <div className="flex">
              <p>Compartilhe:</p>
              <Link className="mx-1" to={"/"}>
                <Facebook />
              </Link>
              <Link className="mx-1" to={"/"}>
                <Instagram />
              </Link>
              <Link className="mx-1" to={"/"}>
                <Twitter />
              </Link>
            </div>
            <div className="flex">
              <img
                className=" mx-"
                src="src\assets\formaspagamento\icon-visa.svg"
                alt="Aceita Pagamento bandeira Visa"
              />
              <img
                className=" mx-1"
                src="src\assets\formaspagamento\icon-mastercard.svg"
                alt="Aceita Pagamento bandeira MasterCard"
              />
              <img
                className=" mx-1"
                src="src\assets\formaspagamento\icon-elo.svg"
                alt="Aceita Pagamento bandeira Elo"
              />
              <img
                className=" mx-1"
                src="src\assets\formaspagamento\icon-pix.svg"
                alt="Aceita Pagamento por Pix"
              />
            </div>
          </div>
        </div>
        <div className=" flex grid-cols-2 bg-orange-400">
          <div className="">
            <h1>DESCRIÇÃO DO PRODUTO</h1>
            <p>testetestestestafafasfsafasfsafsfsafsaf</p>
          </div>
          <img
            className=" mx-5  my-3 size-20"
            src="src\assets\descricao\Save the Earth-bro 1.svg"
            alt="imagem produto"
          />
        </div>
        <div className=" bg-lime-500">
          <h1>Produtos Relacionados:</h1>
          <ListarProduto />
        </div>
      </div>
    </>
  );
}

export default Produto;
