import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../cardcart/CardCart";

function Cart() {
  const { items, limparCart } = useContext(CartContext);

  return (
    <div
      className="
                flex 
                flex-col 
                justify-center
                bg-gray-200
                "
    >
      <h1 className="my-4 text-center text-4xl">Carrinho de Compras</h1>
      <h2 className="my-4 text-center text-2xl">
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

      <button
        className="mx-auto flex w-1/4 
          justify-center rounded bg-slate-400 py-2 text-slate-100 hover:bg-slate-800"
        type="submit"
        disabled={items.length === 0 ? true : false}
        onClick={limparCart}
      >
        Finalizar Compra
      </button>
    </div>
  );
}

export default Cart;
