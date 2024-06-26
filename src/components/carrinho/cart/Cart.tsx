import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../cardcart/CardCart";
import { Dialog, DialogTrigger, DialogContent } from "../../ui/Dialog";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { items, limparCart } = useContext(CartContext);

  const { usuario } = useContext(AuthContext);

  const token = usuario.token;
  const navigate = useNavigate();

  const abrirComprarLogado = () => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/login");
    }
  };

  const finalizarCompra = () => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/login");
    } else {
      limparCart();
      navigate("/");
    }
  };

  return (
    <div className="align-center my-8 flex flex-col justify-center gap-4">
      <h1 className="my-8 text-center text-4xl">Carrinho de Compras</h1>
      <h2 className="text-center text-2xl">
        {items.length === 0 ? "O Carrinho está vazio!" : ""}
      </h2>
      <div
        className="container mx-auto my-4 grid grid-cols-1 
                            gap-4 md:grid-cols-2 lg:grid-cols-5"
      >
        {items.map((produto) => (
          <CardCart key={produto.id} item={produto} />
        ))}
      </div>

      {items.length !== 0 ? (
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="mx-auto my-10 flex 
          w-full max-w-[90%] cursor-pointer justify-center rounded bg-primary/90 py-2 font-bold uppercase text-slate-100 hover:bg-primary md:max-w-96"
              onClick={abrirComprarLogado}
            >
              Efetuar Pagamento
            </button>
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center justify-between gap-8 py-10 sm:max-w-md">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              Pagar com QRCode
            </h2>
            <img
              src="https://ik.imagekit.io/GreenEconomy/Avatar/qrcode-three.svg?updatedAt=1718110091802"
              alt="QRCode da nossas redes sociais"
              className="h-72 object-cover"
              width={500}
              height={500}
            />
            <button
              onClick={finalizarCompra}
              className=" w-full cursor-pointer
           justify-center rounded bg-primary/50 py-4 font-bold uppercase text-slate-100 transition-colors hover:bg-primary/90"
            >
              Finalizar Compra
            </button>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="mx-auto max-w-[300px]">
          <button
            className="flex items-center justify-center gap-3 rounded-md bg-primary/90 px-4 py-2 font-medium uppercase text-white hover:bg-primary"
            onClick={() => navigate("/produtos")}
          >
            Explore nossos produtos
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
