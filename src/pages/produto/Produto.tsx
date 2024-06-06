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
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListarProduto } from "../../components/produto/listarproduto/ListarProduto";
import { useProduto } from "../../hooks/useProduto";
import { CartContext } from "../../contexts/CartContext";

function Produto() {
  const [valor, setValor] = useState(0);

  /* const { categoria} = useParams(); */

  function soma() {
    setValor(valor + 1);
  }
  function subtracao() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  /* const { adicionarProduto } = useContext(CartContext);  */

  const { produtos } = useProduto();

  /*const produtosCategoria = produtos.filter((produto) => {
  produto.categoria?.slug == categoria
})*/

  return (
    <>
      <div className="container py-2">
        <div className="mb-10 mt-6 flex rounded bg-[#E7F0ED] p-3 text-[#4A695E]">
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
          <span className="inline-block font-medium  text-primary">
            'Produto'
          </span>
        </div>
        <div className="container flex grid-cols-2">
          <div className="size-85 mx-5 my-3 rounded border-x border-y ">
            <img
              className="rounded"
              src="https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/T-ShirtPureCotton.jpg?updatedAt=1716562502783"
              alt="imagem produto"
            />
          </div>
          <div className=" container mx-5  my-3">
            <h2 className="mb-4 mt-10 font-poppins font-semibold ">
              'NOME DO PRODUTO AQUI'
            </h2>
            <div className="flex ">
              <p className=" mr-1 font-poppins">'estrelas aqui'</p>
              <p className=" ml-1 mr-2 font-poppins">'Media'</p>
              <p className=" mr-1 font-poppins">'Nº avaliação'</p>
            </div>
            <Link to={"/"} className="font-poppins text-[#4A695E] underline">
              Avaliar Produto
            </Link>
            <div className="mb-2 mt-6 flex">
              <p className=" mx-1 font-poppins">'R$ 0,00'</p>
              <p className=" mx-1 font-poppins text-slate-600 line-through">
                'R$ 0,00'
              </p>
              <div className="mx-1 flex w-14 rounded border-solid bg-primary font-poppins text-sm text-white">
                <p className="w-5 p-1.5">
                  <ArrowDown size={14} color="#ffffff" />
                </p>
                <p className="p-1 font-poppins">'0%'</p>
              </div>
            </div>
            <div className="mb-8 mt-2">
              <p className="font-poppins">
                {" "}
                em até "10x" de 'R$0,00' sem juros
              </p>
            </div>
            <div className="mb-10 mt-8 flex gap-8 font-semibold">
              <div className="ml-1 mr-2 flex w-auto rounded border-2 font-poppins  text-black">
                <button className=" w-4 font-poppins" onClick={subtracao}>
                  -
                </button>
                <p className="border-1 bottom-2 top-2 mx-2 my-1 border-x border-y border-secondary font-poppins">
                  {" "}
                  {valor}{" "}
                </p>
                <button className=" w-4 font-poppins" onClick={soma}>
                  +
                </button>
              </div>
              <div className="flex rounded  bg-[#DAE8E3] p-2 text-primary">
                <button className="align-center mx-3 flex gap-2 px-6 font-poppins">
                  <ShoppingCart />
                  ADICIONAR AO CARRINHO
                </button>
              </div>
            </div>
            <div className=" my-3 flex font-poppins">
              <button
                className="flex w-full justify-center rounded bg-primary 
              px-1 py-1.5 text-center font-poppins text-white"
                /*onClick={() => adicionarProduto(produto)}*/
              >
                COMPRAR
              </button>
              <button className="mx-2 rounded border-x border-y border-primary px-2 text-primary">
                <Heart />
              </button>
            </div>
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
            <div className="mt-8 flex size-11">
              <img
                className="mr-2"
                src="src\assets\formaspagamento\icon-visa.svg"
                alt="Aceita Pagamento bandeira Visa"
              />
              <img
                className=" ml-1 mr-2"
                src="src\assets\formaspagamento\icon-mastercard.svg"
                alt="Aceita Pagamento bandeira MasterCard"
              />
              <img
                className=" ml-1 mr-2"
                src="src\assets\formaspagamento\icon-elo.svg"
                alt="Aceita Pagamento bandeira Elo"
              />
              <img
                className=" ml-1 mr-2"
                src="src\assets\formaspagamento\icon-pix.svg"
                alt="Aceita Pagamento por Pix"
              />
            </div>
          </div>
        </div>
        <div className="container my-2.5 flex w-full grid-cols-2 items-center bg-white">
          <div className="container my-5 h-52 w-4/5 ">
            <h1 className="my-5 font-poppins text-3xl font-semibold">
              DESCRIÇÃO DO PRODUTO
            </h1>
            <p className="font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              perferendis possimus illum, voluptatem iste harum sit earum illo!
              Similique numquam ab illo ratione iusto dignissimos a assumenda
              autem eaque consequuntur?
            </p>
          </div>
          <img
            className=" mx-5 my-3 size-1/4"
            src="src\assets\descricao\Save the Earth-bro 1.svg"
            alt="imagem produto"
          />
        </div>
        <div className="">
          <h1 className="font-poppins">Produtos Relacionados:</h1>
          <ListarProduto produtos={produtos} />
        </div>
      </div>
    </>
  );
}

export default Produto;
