import { CheckIcon } from "lucide-react";
import { Checkout } from "../Checkout";
import { FormPix } from "./FormPix";

import ScrollToTop from "../../../components/ScrollToTop";
import { InformacaoPedido } from "./InformacaoPedido";

export const PaginaPix = ({ infoCheckout }: { infoCheckout: Checkout }) => {
  const numeroPedido = Math.floor(Math.random() * (770 - 1 + 1)) + 1;

  return (
    <>
      <ScrollToTop />
      <div className="container py-10">
        <div className="flex flex-wrap justify-between gap-4 md:gap-10">
          <div className="flex w-full flex-col gap-4 sm:w-fit">
            <div className="flex flex-col gap-1 rounded border border-green-100 bg-green-50 p-4 shadow-sm">
              <p className="text-base font-medium text-gray-600 md:text-lg">
                Número do pedido:
              </p>
              <span className="mb-2 flex items-center gap-4 text-xl font-medium text-green-900 md:text-2xl lg:text-3xl">
                <CheckIcon className="rounded-full bg-green-200" />
                {numeroPedido}
              </span>
              <span className="text-xs sm:text-sm">
                Situação do pedido: Aguardando pagamento
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded border border-green-100 bg-green-50 p-4 text-sm text-gray-600 shadow-sm">
              <strong>Prazo: 2 dias úteis</strong>
              <span>após aprovação da compra</span>
            </div>
          </div>

          <div className="w-full rounded border border-border py-4 lg:flex-1">
            <FormPix precoTotal={infoCheckout.precoTotal} />
          </div>
        </div>

        <InformacaoPedido infoCheckout={infoCheckout} />
      </div>
    </>
  );
};
