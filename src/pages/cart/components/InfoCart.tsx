import { useContext } from "react";
import { useCart } from "../../../hooks/useCart";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { formatarMoeda } from "../../../utils/preco";
import { ArrowRightIcon } from "lucide-react";
import { CalculaCep } from "../../../components/cep/CalculaCep";

export default function InfoCart() {
  const { subtotal, precoTotal, totalDescontos } = useCart();
  const { usuario } = useContext(AuthContext);

  const token = usuario.token;
  const navigate = useNavigate();

  const finalizarCompra = () => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      <section className="w-full rounded border border-border bg-white px-4 py-5 md:flex-1 lg:flex-auto">
        <h2 className="mb-5 text-lg font-medium">Total no carrinho</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-[#575757]">Subtotal</span>
            <span className="w-32 text-sm font-medium">
              {formatarMoeda(subtotal)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-[#575757]">Frete</span>
            <span className="w-32 text-sm font-medium">Grátis</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-[#575757]">Desconto</span>
            <span className="w-32 text-sm font-medium">
              {formatarMoeda(totalDescontos)}
            </span>
          </div>
        </div>
        <div className="my-4 border-t border-t-border"></div>
        <div className="mb-6 flex items-center justify-between gap-2">
          <span className="text-base">Total</span>
          <span className="w-32 text-base font-bold">
            {formatarMoeda(precoTotal)}
          </span>
        </div>
        <button
          className="flex w-full items-center justify-center gap-3 rounded bg-[#0A6847] px-8 py-4 font-medium uppercase text-white transition-colors hover:bg-primary focus-visible:bg-primary lg:text-base"
          onClick={finalizarCompra}
        >
          Seguir para o pagamento
          <ArrowRightIcon className="size- flex-shrink-0" />
        </button>
      </section>
      <section className="w-full rounded border border-border bg-white py-5 md:flex-1 lg:flex-auto">
        <h2 className="mb-5 px-4 text-lg font-medium">Calcule o frete</h2>
        <div className="my-5 border-t border-t-border"></div>
        <CalculaCep precoProduto={precoTotal} />
      </section>
    </>
  );
}
